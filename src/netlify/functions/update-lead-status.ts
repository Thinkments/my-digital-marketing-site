import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

/**
 * Netlify Function: Update Lead Status
 * 
 * This function updates the status of a specific lead.
 * In production, this would update a database record.
 * 
 * Request body:
 * {
 *   "leadId": "lead-001",
 *   "status": "Contacted"
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

    const { leadId, status } = JSON.parse(event.body);

    // Validate input
    if (!leadId || !status) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "leadId and status are required",
        }),
      };
    }

    // Validate status value
    const validStatuses = [
      "New Lead",
      "Contacted",
      "Proposal Sent",
      "Active Project",
      "Completed",
      "Lost/Closed"
    ];

    if (!validStatuses.includes(status)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Invalid status value",
          validStatuses,
        }),
      };
    }

    // In production, you would:
    // 1. Verify admin authentication
    // 2. Update the lead status in your database
    // 3. Log the status change with timestamp and user
    // 4. Send notifications if needed (e.g., email to sales team)
    
    // Example database update (pseudo-code):
    // await db.leads.update({
    //   where: { id: leadId },
    //   data: { 
    //     status,
    //     updatedAt: new Date(),
    //     statusHistory: {
    //       push: {
    //         status,
    //         timestamp: new Date(),
    //         updatedBy: context.clientContext?.user?.email
    //       }
    //     }
    //   }
    // });

    console.log(`Status updated for lead ${leadId} to ${status}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Lead status updated successfully",
        leadId,
        status,
        updatedAt: new Date().toISOString(),
      }),
    };
  } catch (error) {
    console.error("Error updating lead status:", error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Failed to update lead status",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
