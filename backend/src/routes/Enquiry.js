import express from "express";
import Enquiry from "../schema/enquirySchema.js";
import sendEnquiryEmail from "../utils/mailer.js";

const router = express.Router();

// POST /api/enquiry
router.post("/", async (req, res) => {
  console.log("📩 Received enquiry request");
  try {
    const { name, email, website, subject, message } = req.body;

    // Save enquiry to database
    const enquiry = new Enquiry({ name, email, website, subject, message });
    await enquiry.save();

    // Send email
    await sendEnquiryEmail({ name, email, website, subject, message });

    res.status(200).json({ message: "Enquiry submitted and email sent!" });
  } catch (error) {
    console.error("❌ Enquiry Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
