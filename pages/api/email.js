import { SMTPClient } from 'emailjs';

export default function handler(req, res) {
    const { name, asunto, message, mail } = req.body;

    const client = new SMTPClient({
        user: process.env.EMAIL_ACCOUNT,
        password: process.env.EMAIL_PASSWORD,
        host: process.env.EMAIL_HOST,
        ssl:true
    });

    client.send({
        from: `${name}: <${mail}>`,
        to:'info@puertoimagenes.com.ar',
        subject: `${name}: ${asunto}`,
        text: message,
    }, function (err, mess) {
        if (err) {
            console.log(err);
            res.status(400).end(JSON.stringify({ message:'Error' }))
        } else {
            console.log(mess);
            res.status(200).end(JSON.stringify({ message:'Sended ok' }))
        }
    });
}