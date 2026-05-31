import Contact from "../models/Contact.js";

export const sendContactMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    await Contact.create({
      name,
      email,
      message,
    });

    return res.status(200).json({
      message: "Message submitted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};