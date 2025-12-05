import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { google } from "googleapis";

/**
 * Netlify Function: Update Lead Status
 * 
 * This function updates a lead's status in Google Sheets.
 */

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
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Request body is required" }),
      };
    }

    const { leadId, status } = JSON.parse(event.body);

    if (!leadId || !status) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "leadId and status are required" }),
      };
    }

    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Spreadsheet ID not configured');
    }

    // Get all rows to find the one to update
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:K',
    });

    const rows = response.data.values || [];
    
    // Find the row with the matching lead ID (column A)
    let rowIndex = -1;
    for (let i = 1; i < rows.length; i++) { // Skip header row
      if (rows[i][0] === leadId) {
        rowIndex = i + 1; // +1 because sheets are 1-indexed
        break;
      }
    }

    if (rowIndex === -1) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: "Lead not found" }),
      };
    }

    // Update the status column (column K, index 11)
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!K${rowIndex}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[status]]
      }
    });

    console.log(`Lead ${leadId} status updated to: ${status}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Status updated successfully",
        leadId,
        status
      }),
    };

  } catch (error) {
    console.error("Error updating lead status:", error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Failed to update status",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
