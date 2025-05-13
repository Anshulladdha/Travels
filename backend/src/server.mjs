import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { dbConnect } from "./config/dbConfig.js";
import Enquiry from "./schema/enquirySchema.js";
import sendEnquiryEmail from "./utils/mailer.js";
import fetchEmailsRouter from './routes/fetchEmails.js';


// Load environment variables
dotenv.config();

// Connect to MongoDB
dbConnect();

// Setup Express app
const app = express();

// ✅ CORS Setup (must be before routes)
app.use(cors({
  origin: "http://localhost:3000", // React frontend
  methods: ["GET", "POST"],
  credentials: true,
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', fetchEmailsRouter);
// Health check route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Enquiry API
app.post("/api/enquiry", async (req, res) => {
  console.log("🔔 Enquiry request received");
  try {
    const { name, email, website, subject, message } = req.body;

    // Save to DB
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

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
