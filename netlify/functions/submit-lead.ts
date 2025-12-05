import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { google } from "googleapis";

/**
 * Netlify Function: Submit Lead
 * 
 * This function handles new client inquiry submissions from the contact form
 * and saves them to Google Sheets.
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

  return {
    valid: errors.length === 0,
    errors
  };
};

// Generate a unique ID for the lead
const generateLeadId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `LEAD-${timestamp}-${random}`;
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
  return budgetMap[budgetValue] || budgetValue || '';
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
  return sourceMap[sourceValue] || sourceValue || '';
};

// Get Google Sheets client
const getGoogleSheetsClient = async () => {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
  
  if (!clientEmail || !privateKey) {
    throw new Error('Google Sheets credentials not configured');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
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
    const timestamp = leadData.submittedAt || new Date().toISOString();

    // Prepare row data matching Google Sheet columns:
    // id, timestamp, name, email, phone, business, service, budget, description, source, status
    const rowData = [
      leadId,
      timestamp,
      leadData.fullName.trim(),
      leadData.email.trim().toLowerCase(),
      leadData.phoneNumber?.trim() || '',
      leadData.businessName?.trim() || '',
      getServiceName(leadData.serviceInterestedIn),
      getBudgetName(leadData.projectBudget || ''),
      leadData.projectDescription?.trim() || '',
      getReferralSourceName(leadData.howDidYouHear || ''),
      'New Lead'
    ];

    // Save to Google Sheets
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Spreadsheet ID not configured');
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:K',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData]
      }
    });

    console.log('New lead saved to Google Sheets:', {
      id: leadId,
      name: leadData.fullName,
      email: leadData.email,
      service: getServiceName(leadData.serviceInterestedIn)
    });

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Thank you! We'll be in touch soon.",
        leadId: leadId
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
