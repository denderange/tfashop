import React, { useState } from 'react'
import { sendTgMessage } from '../../api/telegram'
import toast from 'react-hot-toast';
import styles from './Quiz.module.scss'
import { useDispatch } from 'react-redux'
import { setNameEmail } from '../../redux/slices/quizSlice';
import { useSelector } from 'react-redux'

type Nameemail = {
	name: string,
	email: string
}

const Step4 = () => {
	const dispatch = useDispatch()
	const stateUserQuiz = useSelector((state: any) => state.quiz)

	//@ts-ignore
	const [isSending, setIsSending] = useState(false)
	const [nameemail, setNameemail] = useState<Nameemail>({ name: '', email: '' })

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.name === 'userName') {
			setNameemail({ ...nameemail, name: e.target.value })
		} else if (e.currentTarget.name === 'userEmail') {
			setNameemail({ ...nameemail, email: e.target.value })
		}
		dispatch(setNameEmail({ name: nameemail.name, email: nameemail.email }))
	}

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

			const message = `Выбраны: ${stateUserQuiz.shoesKind} Размер: ${stateUserQuiz.shoesSize} Доп. инфо: ${stateUserQuiz.message} Пользователь: ${stateUserQuiz.userNameEmail.name} e-mail: ${stateUserQuiz.userNameEmail.email}`

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
				name='userName'
				onChange={(e) => handleForm(e)}
			/>
			<input
				type="email"
				className={styles["last-question__input"]}
				placeholder="E-mail"
				minLength={5}
				name='userEmail'
				onChange={(e) => handleForm(e)}
			/>
			<button
				className={"btn btn--primary btn-last-question"}
				onClick={sendForm}
			>
				Получить
			</button>

			*информация отправляется в Telegram разработчика
		</div>
	)
}

export default Step4