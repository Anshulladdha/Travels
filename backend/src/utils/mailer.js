import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEnquiryEmail = async ({ name, email, website, subject, message }) => {
  return transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Enquiry: ${subject}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
};

export default sendEnquiryEmail;
