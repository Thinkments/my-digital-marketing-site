import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

/**
 * Netlify Function: Submit Lead
 * 
 * This function handles new client inquiry submissions from the contact form.
 * In a production environment, this would save to a database.
 * For now, we'll simulate the submission and log the data.
 * 
 * Note: This is a placeholder implementation. In production, you should:
 * 1. Connect to a real database (Supabase, MongoDB, PostgreSQL, etc.)
 * 2. Implement data validation and sanitization
 * 3. Send email notifications to admins
 * 4. Send confirmation email to the client
 * 5. Implement rate limiting to prevent spam
 */

interface LeadSubmission {
  fullName: string;
  email: string;
  phoneNumber?: string;
  businessName?: string;
  serviceInterestedIn: string;
  projectBudget?: string;
  projectDescription?: string;
  howDidYouHear?: string;
  submittedAt: string;
}

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate required fields
const validateLeadData = (data: any): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length === 0) {
    errors.push('Full name is required');
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email address is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Invalid email format');
  }

  if (!data.serviceInterestedIn || typeof data.serviceInterestedIn !== 'string') {
    errors.push('Service selection is required');
  }

  if (!data.submittedAt || typeof data.submittedAt !== 'string') {
    errors.push('Submission timestamp is required');
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

// Generate a unique ID for the lead
const generateLeadId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `lead-${timestamp}-${random}`;
};

// Map service values to readable names
const getServiceName = (serviceValue: string): string => {
  const serviceMap: Record<string, string> = {
    'web-design': 'Web Design & Development',
    'seo': 'SEO (Search Engine Optimization)',
    'google-business': 'Google Business Profile Management',
    'social-media': 'Social Media Marketing',
    'videography': 'Videography & Video Production',
    'virtual-tours': 'Virtual Tours (360° Photography)',
    'complete-package': 'Complete Digital Marketing Package',
    'consultation': 'Consultation - Not Sure Yet'
  };
  return serviceMap[serviceValue] || serviceValue;
};

// Map budget values to readable names
const getBudgetName = (budgetValue: string): string => {
  const budgetMap: Record<string, string> = {
    'under-1000': 'Under $1,000',
    '1000-2500': '$1,000 - $2,500',
    '2500-5000': '$2,500 - $5,000',
    '5000-10000': '$5,000 - $10,000',
    '10000-plus': '$10,000+',
    'not-sure': 'Not sure yet'
  };
  return budgetMap[budgetValue] || budgetValue;
};

// Map referral source values to readable names
const getReferralSourceName = (sourceValue: string): string => {
  const sourceMap: Record<string, string> = {
    'google-search': 'Google Search',
    'social-media': 'Social Media',
    'referral': 'Referral from friend/colleague',
    'saw-work': 'Saw your work on another website',
    'google-business': 'Google Business Profile',
    'other': 'Other'
  };
  return sourceMap[sourceValue] || sourceValue;
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Set CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: "",
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        success: false,
        error: "Method not allowed. Please use POST." 
      }),
    };
  }

  try {
    // Parse request body
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: "Request body is required" 
        }),
      };
    }

    const leadData: LeadSubmission = JSON.parse(event.body);

    // Validate the data
    const validation = validateLeadData(leadData);
    if (!validation.valid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: "Validation failed",
          errors: validation.errors
        }),
      };
    }

    // Generate a unique ID
    const leadId = generateLeadId();

    // Transform the data to match the lead format
    const newLead = {
      id: leadId,
      name: leadData.fullName.trim(),
      email: leadData.email.trim().toLowerCase(),
      phone: leadData.phoneNumber?.trim() || '',
      businessName: leadData.businessName?.trim() || '',
      service: getServiceName(leadData.serviceInterestedIn),
      budget: leadData.projectBudget ? getBudgetName(leadData.projectBudget) : '',
      projectDescription: leadData.projectDescription?.trim() || '',
      referralSource: leadData.howDidYouHear ? getReferralSourceName(leadData.howDidYouHear) : '',
      status: "New Lead",
      submittedAt: leadData.submittedAt,
      notes: []
    };

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification to admins
    // 3. Send confirmation email to client
    // 4. Log to analytics
    
    // For now, just log the submission
    console.log('New lead submission received:', {
      id: newLead.id,
      name: newLead.name,
      email: newLead.email,
      service: newLead.service,
      submittedAt: newLead.submittedAt
    });

    // Simulate a small delay to make it feel more realistic
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Lead submitted successfully",
        leadId: newLead.id,
        data: {
          name: newLead.name,
          email: newLead.email,
          service: newLead.service,
          submittedAt: newLead.submittedAt
        }
      }),
    };

  } catch (error) {
    console.error("Error submitting lead:", error);
    
    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Invalid JSON in request body",
        }),
      };
    }

    // Handle all other errors
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Failed to submit lead",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
