const sgMail = require('@sendgrid/mail');
const request = require('request');
const Project = require('../models/content');
var Contact = require('../models/contact');

module.exports.index_get = (req, res) => {
    var page = {
        title: 'Royden Rego',
        id: 'index'
    }

    Project.find({})
        .sort({ created: -1 })
        .exec(function (err, projects) {
            res.render('index', { title: page.title, rel_link: '', page, projects });
        });
};

//Handle contact form submission
module.exports.submit_post = (req, res) => {
    var data = req.body;

    if (!(data.fullname.trim()) || !(data.email.trim()) || !(data.message.trim())) {
        res.render('error', { title: 'Invalid Action' });
        return;
    }

    if (data['g-recaptcha-response'] === undefined || data['g-recaptcha-response'] === '' || data['g-recaptcha-response'] === null) {
        //Send JSON response
        console.log(`The Captcha wasn't solved`);
        return res.json({ statuscode: 300, status: "Please select Captcha" });
    }

    var secretKey = process.env.GOOGLE_RECAPTCHA_KEY;

    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            console.log('Captcha Verification failed');
            return res.json({ statuscode: 300, status: "Captcha Verification failed" });
        }

        Contact.create(data, function (err, small) {
            if (err) {
                res.render('error', { title: 'Something went wrong' });
                return;
            }

            //Send email
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            const msg = {
                to: 'roydenrego@softrixz.com',
                from: {
                    'name': 'Royden Rego',
                    'email': 'no-reply@roydenrego.com',
                },
                replyTo: data.email,
                subject: 'Royden Rego - ContactForm',
                text: 'You have a new contact form submission',
                html: '<p>You have a new contact form submission</p>' +
                    '<p>Full Name: ' + data.fullname + '</p>' +
                    '<p>Email: ' + data.email + '</p>' +
                    '<p>Message: ' + data.message + '</p>',
            };
            sgMail.send(msg);

            const usrMsg = {
                to: data.email,
                from: {
                    'name': 'Royden Rego',
                    'email': 'no-reply@roydenrego.com',
                },
                subject: 'Contact Form - Royden Rego',
                text: 'Hi ' + data.fullname + ', I have received your message and will revert back to you as soon as I can.',
                html: '<p>Hi ' + data.fullname + ',</p>' +
                    '<p>I have received your message and will revert back to you as soon as I can.</p>' +
                    '<p>Warm Regards<br>Royden Rego</p>' +
                    '<p>Disclaimer: This is a automated message sent automatically by the system. Please do not reply to this email since there is no person monitoring this email address.</p>',
            };
            sgMail.send(usrMsg);

            //Send JSON response
            res.json({ statuscode: 200, status: "Contact Form submission successfull" });

        });
    });
};