import { useState } from 'react'
import { sendTgMessage } from '../../api/telegram'
import toast from 'react-hot-toast';
import styles from './Quiz.module.scss'
import { useSelector } from 'react-redux'

type Nameemail = {
	name: string,
	email: string
}

const Step4 = () => {
	const stateVariant = useSelector((state: any) => state.quiz.chosenVariants)
	const stateMessage = useSelector((state: any) => state.quiz.message)
	const stateSize = useSelector((state: any) => state.quiz.checkedSize)

	//@ts-ignore
	const [isSending, setIsSending] = useState(false)
	const [nameemail, setNameemail] = useState<Nameemail>({ name: '', email: '' })

	const notifySendSuccess = () => toast('Сообщение отправлено.', {
		style: {
			border: '1px solid #46005c',
			backgroundColor: "#DBBBA9"
		},
	});

	const notifySendError = () => toast('Ваше сообщение не отправлено.', {
		style: {
			border: '1px solid black',
			backgroundColor: "red"
		},
	});

	const sendForm = async (): Promise<void> => {
		try {
			setIsSending(true)

			const message = `Выбраны: ${stateVariant} Размер: ${stateSize} Доп. инфо: ${stateMessage} Пользователь: ${nameemail.name} e-mail: ${nameemail.email}`

			await sendTgMessage(message)
			notifySendSuccess()

		} catch (error) {
			notifySendError()
		} finally {
			setIsSending(false)
		}
	}

	return (
		<div className={styles["last-question__form"]}>
			<h3 className={styles["last-question__title"]}>Получить предложение</h3>
			<p className={styles["last-question__descr"]}>
				Получите подборку подходящих для вас моделей на почту
			</p>

			<input
				type="text"
				className={styles["last-question__input"]}
				placeholder="Ваше имя"
				minLength={2}
				onChange={(e) => setNameemail({ ...nameemail, name: e.target.value })}
			/>
			<input
				type="email"
				className={styles["last-question__input"]}
				placeholder="E-mail"
				minLength={5}
				onChange={(e) => setNameemail({ ...nameemail, email: e.target.value })}
			/>
			<button
				className={"btn btn--primary btn-last-question"}
				onClick={sendForm}
			>
				Получить
			</button>
		</div>
	)
}

export default Step4