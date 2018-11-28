const sgMail = require('@sendgrid/mail');

module.exports.set = function(app) {

    var indexRouter = require('../routes/index');
    app.use('/', indexRouter);

    //Handle contact form submission
    app.post('/submit', function(req, res) {
        var data = req.body;

        if (!(data.fullname.trim()) || !(data.email.trim()) || !(data.message.trim())) {
            res.render('error', { title: 'Invalid Action' });
            return;
        }

        var Form = require('../models/contact');

        Form.create(data, function(err, small) {
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
                    '<p>Disclaimer: This is a automated message sent automatically by the system. Please do not reply to this email as there is no person monitoring this email address.</p>',
            };
            sgMail.send(usrMsg);

            //Send JSON response
            res.json({ statuscode: 200, status: "Contact Form submission successfull" });

        });

    });
}
