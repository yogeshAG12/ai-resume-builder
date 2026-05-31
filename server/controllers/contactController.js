export const sendContactMail = async (req, res) => {
  console.log("CONTACT API HIT");

  return res.status(200).json({
    message: "API Working",
  });
};