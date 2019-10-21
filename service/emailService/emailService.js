const mailer = require('nodemailer');

module.exports = async (email) => {

    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });

    const info = await transport.sendMail({
        from: email,
        to: new_email,
        subject: 'Register',
        html: 'You were successfully registered',
    });

    return info.response;
}