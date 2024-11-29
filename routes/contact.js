const express = require('express');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

const router = express.Router();

// Route to handle form submissions
router.post('/', async (req, res) => {
  try {
    // Save message to database
    const newContact = new Contact(req.body);
    await newContact.save();

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Admin email
        pass: process.env.EMAIL_PASSWORD, // App password
      },
    });

    // Email to send confirmation to the user
    const userMailOptions = {
      from: process.env.EMAIL,
      to: req.body.email, // User's email from the form
      subject: `Thank you for reaching out, ${req.body.name}!`,
      text: `Hello ${req.body.name},\n\nThank you for contacting us. We have received your message:\n\n"${req.body.message}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Company Team`,
    };

    // Email to notify the admin about the new contact form submission
    const adminMailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Admin email
      subject: `New Contact Form Submission from ${req.body.name}`,
      text: `You have received a new message from your website contact form:\n\nName: ${req.body.name}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\nMessage:\n${req.body.message}\n\nPlease respond promptly.`,
    };

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    // Respond to the API request
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Error sending message', error });
  }
});

module.exports = router;
