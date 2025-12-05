import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { google } from "googleapis";

/**
 * Netlify Function: Get Leads
 * 
 * This function retrieves all client leads from Google Sheets
 * for the admin dashboard.
 */

interface Lead {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  service: string;
  budget: string;
  projectDescription: string;
  referralSource: string;
  status: string;
  notes?: string[];
}

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
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return google.sheets({ version: 'v4', auth });
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Set CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
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

  // Only allow GET requests
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Spreadsheet ID not configured');
    }

    // Get all rows from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:K',
    });

    const rows = response.data.values || [];
    
    // Skip header row (first row)
    const dataRows = rows.slice(1);

    // Transform rows into Lead objects
    // Columns: id, timestamp, name, email, phone, business, service, budget, description, source, status
    const leads: Lead[] = dataRows.map((row) => ({
      id: row[0] || '',
      timestamp: row[1] || '',
      name: row[2] || '',
      email: row[3] || '',
      phone: row[4] || '',
      businessName: row[5] || '',
      service: row[6] || '',
      budget: row[7] || '',
      projectDescription: row[8] || '',
      referralSource: row[9] || '',
      status: row[10] || 'New Lead',
      notes: []
    })).filter(lead => lead.id && lead.email); // Filter out empty rows

    // Sort by timestamp descending (newest first)
    leads.sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return dateB - dateA;
    });

    // Apply status filter if provided
    const statusFilter = event.queryStringParameters?.status;
    const filteredLeads = statusFilter 
      ? leads.filter(lead => lead.status === statusFilter)
      : leads;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        leads: filteredLeads,
        total: leads.length,
        filtered: filteredLeads.length,
      }),
    };

  } catch (error) {
    console.error("Error fetching leads:", error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Failed to fetch leads",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
