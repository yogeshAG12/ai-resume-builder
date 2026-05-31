import nodemailer from "nodemailer";

export const sendContactMail = async (req, res) => {
  console.log("CONTACT API HIT");
  console.log("BODY:", req.body);

  return res.status(200).json({
    message: "API Working",
  });
};

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
  console.log("CONTACT ERROR:", error);
  console.log("EMAIL_USER:", process.env.EMAIL_USER);

  return res.status(500).json({
    message: error.message,
  });
}
};