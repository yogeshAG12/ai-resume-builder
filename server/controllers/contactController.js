import nodemailer from "nodemailer";

export const sendContactMail = async (req, res) => {
  try {
    console.log("EMAIL_USER =", process.env.EMAIL_USER);
    console.log("EMAIL_PASS =", process.env.EMAIL_PASS ? "FOUND" : "NOT FOUND");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    return res.status(200).json({
      message: "SMTP Connected",
    });

  } catch (error) {
    console.log("FULL ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};