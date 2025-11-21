import { Handler } from '@netlify/functions';

interface SocialMediaRequest {
  topic: string;
  tone?: string;
  includeHashtags?: boolean;
  includeEmojis?: boolean;
}

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body: SocialMediaRequest = JSON.parse(event.body || '{}');
    const { 
      topic, 
      tone = 'professional', 
      includeHashtags = true, 
      includeEmojis = true 
    } = body;

    if (!topic) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Topic is required' }),
      };
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY not found');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' }),
      };
    }

    const prompt = `You are a social media expert for ThinkMents Digital Marketing Agency in Decatur, Texas.

Create engaging social media posts for the following topic:
"${topic}"

Settings:
- Tone: ${tone}
- Include hashtags: ${includeHashtags ? 'Yes' : 'No'}
- Include emojis: ${includeEmojis ? 'Yes' : 'No'}

Create 4 platform-specific posts optimized for:

1. FACEBOOK (casual, can be longer, engaging)
2. INSTAGRAM (visual, lifestyle-focused, emojis)
3. TWITTER/X (concise, under 280 characters, punchy)
4. LINKEDIN (professional, business-focused)

${includeHashtags ? 'Also provide a list of 5-8 relevant hashtags.' : ''}

Format your response as JSON:
{
  "facebook": "post content here",
  "instagram": "post content here",
  "twitter": "post content here",
  "linkedin": "post content here",
  "hashtags": ["#hashtag1", "#hashtag2", ...]
}

Requirements:
- Each post should be platform-appropriate
- Respect character limits (especially Twitter: 280 chars)
- Include a call-to-action when appropriate
- Make them engaging and shareable
- Use ${tone} tone throughout
- ${includeEmojis ? 'Use relevant emojis naturally' : 'Minimal or no emojis'}
- Focus on value to the audience
- Mention Decatur/Texas when relevant

Return ONLY the JSON object, no other text.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2048,
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
          error: 'Failed to generate posts',
          details: errorData 
        }),
      };
    }

    const data = await response.json();
    let postsText = data.content[0].text;

    // Clean up the response - remove markdown code blocks if present
    postsText = postsText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    // Parse the JSON
    const posts = JSON.parse(postsText);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        posts,
        generatedAt: new Date().toISOString(),
      }),
    };
  } catch (error) {
    console.error('Error generating social posts:', error);
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
