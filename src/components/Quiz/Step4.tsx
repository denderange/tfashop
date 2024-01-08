import styles from './Quiz.module.css'

const Step4 = () => {
	return (
		<div className={styles["last-question__form"]}>
			<h3 className={styles["last-question__title"]}>Получить предложение</h3>
			<p className={styles["last-question__descr"]}>
				Получите подборку подходящих для вас моделей на почту
			</p>
			<input type="text" className={styles["last-question__input"]} placeholder="Ваше имя" />
			<input type="email" className={styles["last-question__input"]} placeholder="E-mail" />
			<button className={"btn btn--primary btn-last-question"}>Получить</button>
		</div>
	)
}

export default Step4

// className={styles[""]}