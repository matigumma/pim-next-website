import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {

    const client = new SMTPClient({
        user: 'info@puertoimagenes.com.ar',
        password: 'p52rt43m1g2n2s',
        host: 'mail.puertoimagenes.com.ar',
        ssl:true
    });

    try {
        await client.sendAsync(
            {
                from: req.data.mail,
                to:'info@puertoimagenes.com.ar',
                subject: req.data.asunto,
                text: req.data.message,
            }
        )   
        res.status(200).end(JSON.stringify({ message:'Sended ok' }))
    } catch (error) {
        res.status(400).end(JSON.stringify({ message:'Error' }))
    }
    res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}