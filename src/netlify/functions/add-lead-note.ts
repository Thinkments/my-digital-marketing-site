import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

/**
 * Netlify Function: Add Lead Note
 * 
 * This function adds an internal note to a specific lead.
 * In production, this would update a database record.
 * 
 * Request body:
 * {
 *   "leadId": "lead-001",
 *   "note": "Called client, they're interested in starting next month"
 * }
 */

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
    // Parse request body
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Request body is required",
        }),
      };
    }

    const { leadId, note } = JSON.parse(event.body);

    // Validate input
    if (!leadId || !note) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "leadId and note are required",
        }),
      };
    }

    // Validate note is not empty
    if (typeof note !== "string" || note.trim().length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Note must be a non-empty string",
        }),
      };
    }

    // In production, you would:
    // 1. Verify admin authentication
    // 2. Add the note to the lead in your database
    // 3. Log who added the note and when
    // 4. Optionally notify team members
    
    // Example database update (pseudo-code):
    // const noteEntry = {
    //   id: generateId(),
    //   text: note.trim(),
    //   createdAt: new Date(),
    //   createdBy: context.clientContext?.user?.email || 'admin'
    // };
    // 
    // await db.leads.update({
    //   where: { id: leadId },
    //   data: { 
    //     notes: {
    //       push: noteEntry
    //     },
    //     updatedAt: new Date()
    //   }
    // });

    const timestamp = new Date().toISOString();
    console.log(`Note added to lead ${leadId} at ${timestamp}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Note added successfully",
        leadId,
        note: note.trim(),
        createdAt: timestamp,
      }),
    };
  } catch (error) {
    console.error("Error adding note to lead:", error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Failed to add note",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
