import { useState } from 'react'
import styles from './Quiz.module.scss'
import { useDispatch } from 'react-redux'
import { setStateMessage } from '../../redux/slices/quizSlice'

const Step3 = () => {
	const dispatch = useDispatch()
	const [message, setMessage] = useState('')

	const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.currentTarget.value)
		dispatch(setStateMessage(message))
	}

	return (
		<>
			<h4 className={styles["quiz-question__title"]}>Уточните какие-либо моменты</h4>

			<textarea
				placeholder='Введите сообщение'
				className={styles["quiz-question__message"]}
				onChange={(e) => handleMessage(e)}
			/>
		</>
	)
}

export default Step3