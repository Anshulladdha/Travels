const BASE_URL = process.env.REACT_APP_BASE_URL;

// Submit Enquiry API
export const submitEnquiry = async (enquiryData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enquiryData),
    });

    // Check for successful response
    if (!response.ok) {
      throw new Error(`Failed to submit enquiry: ${response.statusText}`);
    }

    return await response.json(); // Return the response data
  } catch (error) {
    console.error("❌ submitEnquiry error:", error);
    throw error; // Re-throw error for handling in calling code
  }
};
