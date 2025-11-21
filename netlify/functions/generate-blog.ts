import { Handler } from '@netlify/functions';

interface BlogRequest {
  topic: string;
  keywords?: string;
  tone?: string;
  audience?: string;
  wordCount?: number;
}

export const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    const body: BlogRequest = JSON.parse(event.body || '{}');
    const { topic, keywords = '', tone = 'professional', audience = 'business owners', wordCount = 1500 } = body;

    // Validate required fields
    if (!topic) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Topic is required' }),
      };
    }

    // Get API key from environment variable
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY not found in environment variables');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' }),
      };
    }

    // Create the prompt for Claude
    const prompt = `You are an expert content writer for ThinkMents Digital Marketing Agency based in Decatur, Texas. 

Write a comprehensive, SEO-optimized blog post with the following specifications:

Topic: ${topic}
${keywords ? `Target Keywords: ${keywords}` : ''}
Tone: ${tone}
Target Audience: ${audience}
Word Count: Approximately ${wordCount} words

Requirements:
1. Create an engaging, SEO-friendly title (H1)
2. Write a compelling introduction that hooks the reader
3. Use clear H2 and H3 headers to organize content
4. Include actionable insights and practical advice
5. Write in a ${tone} tone appropriate for ${audience}
6. Naturally incorporate the keywords: ${keywords || 'digital marketing, Decatur, Texas'}
7. Include a strong conclusion with a call-to-action
8. Format the content with proper HTML tags (h1, h2, h3, p, ul, li, strong, em)
9. Make it approximately ${wordCount} words

IMPORTANT: 
- Return ONLY the HTML content (no markdown, no code blocks)
- Start directly with the <h1> tag
- Use semantic HTML
- Make it ready to publish
- Focus on providing genuine value to readers
- Include local Decatur/Texas references where relevant

Generate the blog post now:`;

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error:', errorData);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: 'Failed to generate blog post',
          details: errorData 
        }),
      };
    }

    const data = await response.json();
    const blogContent = data.content[0].text;

    // Extract title from the blog content
    const titleMatch = blogContent.match(/<h1[^>]*>(.*?)<\/h1>/i);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '') : topic;

    // Generate meta description (first 155 characters of content)
    const textContent = blogContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const metaDescription = textContent.substring(0, 155) + '...';

    // Return the generated blog post
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        title,
        content: blogContent,
        metaDescription,
        wordCount: textContent.split(/\s+/).length,
        generatedAt: new Date().toISOString(),
      }),
    };
  } catch (error) {
    console.error('Error generating blog:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};
