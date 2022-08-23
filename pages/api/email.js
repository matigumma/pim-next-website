
export default async function email(req, res) {  
    const { body } = req.body;
    
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json', 
            'Content-Type': 'application/json', 
            'api-key': process.env.SENDINBLUE_API_KEY
        },  
        body: JSON.stringify({
            to: [{email: 'info@puertoimagenes.com.ar'}],
            replyTo: {email: body.mail},
            templateId: 1,
            params: {NAME: body.name, ASUNTO: body.asunto, MESSAGE: body.message},
        }),
    };

    await fetch('https://api.sendinblue.com/v3/smtp/email', options)
        .then(response => response.json())
        .then((onfulfilled) => {
            res.status(200).json({
                message: 'Mensaje enviado correctamente',
                data: onfulfilled.messageId
            });
        },
        (onrejected) => {
            res.status(400).json({
                message: 'Error al enviar el mensaje',
                data: onrejected.code
            });
        })
        .catch(err => 
            res.status(500).json({
                message: 'Error al enviar el mensaje',
            })
        );
}
