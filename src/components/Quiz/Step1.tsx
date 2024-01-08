import quizImg from '../../assets/images/quiz-photo-1.jpg'
import styles from './Quiz.module.css'

const Step1 = () => {
	return (
		<>
			<h4 className={styles["quiz-question__title"]}>Какой тип кроссовок рассматриваете?</h4>

			<form className={styles["quiz-form"]} action="">
				{/* <div className={styles["quiz-questions"]}>

						</div> */}
				<ul className={styles["quiz-question__answers"]}>
					<li className={styles["quiz-question__item"]}>
						<label className={styles["quiz-question__label"]}>
							<img src={quizImg} alt="" />
							<input type="checkbox" name="type" value="кеды" className={styles["quiz-question__answer"]} />
							<span>кеды</span>
						</label>
					</li>

					<li className={styles["quiz-question__item"]}>
						<img src={quizImg} alt="" />
						<label className={styles["quiz-question__label"]}>
							<input type="checkbox" name="type" value="кеды" className={styles["quiz-question__answer"]} />
							<span>кеды</span>
						</label>
					</li>
					<li className={styles["quiz-question__item"]}>
						<img src={quizImg} alt="" />
						<label className={styles["quiz-question__label"]}>
							<input type="checkbox" name="type" value="кеды" className={styles["quiz-question__answer"]} />
							<span>кеды</span>
						</label>
					</li>
					<li className={styles["quiz-question__item"]}>
						<img src={quizImg} alt="" />
						<label className={styles["quiz-question__label"]}>
							<input type="checkbox" name="type" value="кеды" className={styles["quiz-question__answer"]} />
							<span>кеды</span>
						</label>
					</li>
					<li className={styles["quiz-question__item"]}>
						<img src={quizImg} alt="" />
						<label className={styles["quiz-question__label"]}>
							<input type="checkbox" name="type" value="кеды" className={styles["quiz-question__answer"]} />
							<span>кеды</span>
						</label>
					</li>
					<li className={styles["quiz-question__item"]}>
						<img src={quizImg} alt="" />
						<label className={styles["quiz-question__label"]}>
							<input type="checkbox" name="type" value="кеды" className={styles["quiz-question__answer"]} />
							<span>кеды</span>
						</label>
					</li>
				</ul>
			</form>
		</>
	)
}

export default Step1