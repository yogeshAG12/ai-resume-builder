export const sendContactMail = async (req, res) => {
  try {
    console.log("CONTACT API HIT");
    console.log("BODY:", req.body);

    return res.status(200).json({
      message: "API Working",
    });
  } catch (error) {
    console.log("CONTACT ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};