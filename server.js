const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'activecommercecentrepatna@gmail.com',
        pass: 'qhnl oyfg lvvq flrj'
    }
});

// Test email connection on startup
setTimeout(() => {
    transporter.verify((error, success) => {
        if (error) {
            console.log('Email configuration error:', error);
        } else {
            console.log('✅ Email server is ready to send messages');
        }
    });
}, 1000);

// Route to handle admission form submission
app.post('/submit-admission', async (req, res) => {
    try {
        console.log('📝 Admission form received:', req.body);
        const { name, phone, class: studentClass } = req.body;

        if (!name || !phone || !studentClass) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        const mailOptions = {
            from: 'activecommercecentrepatna@gmail.com',
            to: 'activecommercecentrepatna@gmail.com',
            subject: 'New Admission Inquiry - Active Commerce',
            html: `
                <h2>New Admission Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Class:</strong> ${studentClass}</p>
                <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            `
        };

        console.log('📧 Sending admission email...');
        await transporter.sendMail(mailOptions);
        console.log('✅ Admission email sent successfully');
        res.json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('❌ Error sending admission email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
});

// Route to handle contact form submission
app.post('/submit-contact', async (req, res) => {
    try {
        console.log('📝 Contact form received:', req.body);
        const { fullName, email, phone, courseInterest, message } = req.body;

        if (!fullName || !email || !phone) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        const mailOptions = {
            from: 'activecommercecentrepatna@gmail.com',
            to: 'activecommercecentrepatna@gmail.com',
            subject: 'New Contact Message - Active Commerce',
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Course Interest:</strong> ${courseInterest || 'Not specified'}</p>
                <p><strong>Message:</strong> ${message || 'No message provided'}</p>
                <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            `
        };

        console.log('📧 Sending contact email...');
        await transporter.sendMail(mailOptions);
        console.log('✅ Contact email sent successfully');
        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('❌ Error sending contact email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`✅ API endpoints ready:`);
    console.log(`   - POST /submit-admission`);
    console.log(`   - POST /submit-contact`);
});