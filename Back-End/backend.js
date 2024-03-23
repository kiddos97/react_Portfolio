"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Backend server using Express
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var nodemailer_1 = require("nodemailer");
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Define API endpoint for form submission
app.post('/send-email', function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, subject = _a.subject, message = _a.message;
    // Create SMTP transporter
    var transporter = nodemailer_1.default.createTransport({
        service: 'Gmail',
        auth: {
            user: 'osaroimarhiagbe@gmail.com',
            pass: 'your-email-password',
        },
    });
    // Define email options
    var mailOptions = {
        from: 'your-email@gmail.com',
        to: 'osaroimarhiagbe@gmail.com',
        subject: subject,
        text: "Name: ".concat(name, "\nEmail: ").concat(email, "\nMessage: ").concat(message),
    };
    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Error sending email' });
        }
        else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
