const nodemailer = require("nodemailer");

const sendHelpRequest = async (req, res) => {
  const { email, comment } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.meta.ua',
      port: 465,
      secure: true,
      auth: {
        user: 'task-board@meta.ua',
        pass: process.env.META_PASSWORD, 
      }
    });

    const mailOptions = {
      from: "task-board@meta.ua",
      to: "taskpro.project@gmail.com",
      subject: "Help Request",
      text: `Email: ${email}\nComment: ${comment}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Help request sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send help request" });
  }
};

module.exports = sendHelpRequest