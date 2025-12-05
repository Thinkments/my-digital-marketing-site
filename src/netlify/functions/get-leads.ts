import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

/**
 * Netlify Function: Get Leads
 * 
 * This function retrieves all client leads from storage.
 * In a production environment, this would connect to a database.
 * For now, we'll use Netlify's environment variables or a simple data store.
 * 
 * Note: This is a placeholder implementation. In production, you should:
 * 1. Connect to a real database (Supabase, MongoDB, PostgreSQL, etc.)
 * 2. Implement proper authentication/authorization
 * 3. Add pagination for large datasets
 */

// Mock data for development/testing
// In production, replace this with actual database queries
const getMockLeads = () => {
  return [
    {
      id: "lead-001",
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "(555) 123-4567",
      businessName: "Smith Marketing Co.",
      service: "Website Design",
      budget: "$5,000 - $10,000",
      projectDescription: "We need a modern, responsive website for our marketing agency. Looking for something clean and professional that showcases our portfolio.",
      referralSource: "Google Search",
      status: "New Lead",
      submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      notes: ["Initial inquiry received", "Scheduled follow-up call for next week"]
    },
    {
      id: "lead-002",
      name: "Sarah Johnson",
      email: "sarah.j@techstartup.com",
      phone: "(555) 234-5678",
      businessName: "TechStartup Inc.",
      service: "SEO",
      budget: "$2,000 - $5,000",
      projectDescription: "Need comprehensive SEO strategy to improve our search rankings. Currently not showing up for key industry terms.",
      referralSource: "LinkedIn",
      status: "Contacted",
      submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
      notes: ["Had initial call on Monday", "Sending proposal this week"]
    },
    {
      id: "lead-003",
      name: "Michael Chen",
      email: "m.chen@restaurant.com",
      phone: "(555) 345-6789",
      businessName: "Chen's Fine Dining",
      service: "Virtual Tours",
      budget: "$1,000 - $2,000",
      projectDescription: "Want to create a virtual tour of our restaurant to showcase on Google Maps and our website.",
      referralSource: "Referral from existing client",
      status: "Proposal Sent",
      submittedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
      notes: ["Very interested in 360° tour", "Proposal sent on Tuesday", "Awaiting response"]
    },
    {
      id: "lead-004",
      name: "Emily Rodriguez",
      email: "emily@fashionboutique.com",
      businessName: "Emily's Fashion Boutique",
      service: "Social Media Marketing",
      budget: "$2,000 - $5,000",
      projectDescription: "Looking for ongoing social media management across Instagram, Facebook, and TikTok. Need help with content creation and posting schedule.",
      referralSource: "Facebook Ad",
      status: "Active Project",
      submittedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
      notes: ["Contract signed!", "Started content calendar", "First posts going live next week"]
    },
    {
      id: "lead-005",
      name: "David Park",
      email: "david@lawfirm.com",
      phone: "(555) 456-7890",
      businessName: "Park & Associates Law",
      service: "Google Marketing",
      budget: "$5,000 - $10,000",
      projectDescription: "Need help with Google Ads campaign for our law firm. Focusing on personal injury and family law keywords.",
      referralSource: "Google Search",
      status: "New Lead",
      submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      notes: []
    }
  ];
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
    // In production, you would:
    // 1. Verify admin authentication
    // 2. Query your database for leads
    // 3. Implement pagination
    // 4. Add error handling for database errors
    
    // For now, return mock data
    const leads = getMockLeads();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        leads,
        count: leads.length,
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
