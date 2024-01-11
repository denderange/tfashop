const baseURL = 'https://api.telegram.org/bot6983882724:AAE2fARMEm3CLGWpRMz8v15Q2EwFJqjWt8U/'

export const sendTgMessage = async (message: string): Promise<void> => {
	const url = `${baseURL}sendMessage?chat_id=-4094082604&text=${message}`

	const response = await fetch(url)

	if (!response.ok) {
		const error = await response.json()

		await Promise.reject(error.description || "Ошибка при отправке сообщения: " + error)
	}
}