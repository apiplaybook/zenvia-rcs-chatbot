import { post } from 'request-promise'

const sendMessage = (message: string) => {
	post({
		uri: 'https://api.zenvia.com/v2/channels/rcs/messages',
		headers: {
			'X-API-TOKEN': 'SEU_TOKEN',
		},
		body: {
			from: 'REMETENTE',
			to: 'DESTINATÁRIO',
			contents: [
				{
					type: 'text',
					text: message,
				},
			],
		},
		json: true,
	})
		.then((response) => {
			console.log('Response:', response)
		})
		.catch((error) => {
			console.log('Error:', error)
		})
}

export default sendMessage
