import styles from './Quiz.module.css'

const Step3 = () => {
	return (
		<>
			<label className={styles["quiz-question__label"]}>
				<textarea
					placeholder='Введите сообщение'
					className={styles["quiz-question__message"]}
				></textarea>
			</label>
		</>
	)
}

export default Step3