import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import interpretsMessage from './src/functions/interpretsMessage'
import cron from 'node-cron'
import { checkAndSendReminder } from './src/functions/checkAndSendReminder'

// Inicializa o express e define uma porta
const app = express()
const PORT = 3000

// Indica para o express usar o JSON parsing do body-parser
app.use(bodyParser.json())

app.post('/hook', (req: Request, res: Response) => {
	const { event } = req.body

	const message = event.body.message.contents[0].text // Armazena em uma variável a mensagem

	interpretsMessage(message)

	res.status(200).end() // Responde quem solicitou nosso webhook com status 200
})

cron.schedule('* * * * *', () => {
	checkAndSendReminder()
})

// Inicia o express na porta definida anteriormente
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
