import Enquiry from "../schema/enquirySchema";
import sendEnquiryEmail from "../utils/mailer";

const handleEnquiry = async (req, res) => {
  try {
    const { name, email, website, subject, message } = req.body;

    const enquiry = new Enquiry({ name, email, website, subject, message });
    await enquiry.save();

    await sendEnquiryEmail({ name, email, website, subject, message });

    res.status(200).json({ message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error("Enquiry Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default { handleEnquiry };
