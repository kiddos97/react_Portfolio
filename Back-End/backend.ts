// Backend server using Express
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
app.use(bodyParser.json());

// Define API endpoint for form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'osaroimarhiagbe@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Define email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'osaroimarhiagbe@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
