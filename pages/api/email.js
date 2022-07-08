import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
    const { name, asunto, message, mail } = req.body;

    const client = new SMTPClient({
        user: 'info@puertoimagenes.com.ar',
        password: 'p52rt43m1g2n2s',
        host: 'mail.puertoimagenes.com.ar',
        ssl:true
    });

    try {
        await client.sendAsync(
            {
                from: mail,
                to:'info@puertoimagenes.com.ar',
                subject: `${name}: ${asunto}`,
                text: message,
            }
        )   
        res.status(200).end(JSON.stringify({ message:'Sended ok' }))
    } catch (error) {
        res.status(400).end(JSON.stringify({ message:'Error' }))
    }
}