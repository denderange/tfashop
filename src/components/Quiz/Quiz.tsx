import quizImg from '../../assets/images/quiz-photo-1.jpg'
import Button from '../Button/Button';
import styles from './Quiz.module.css';

const Quiz = () => {
	return (
		<section className={styles["quiz"]}>
			<div className="container">
				<h2 className="visually-hidden">Подбор по параметрам</h2>
				<div className={styles["quiz__content"]}>
					<h3 className={`title ${styles["quiz__title"]}`}>Мы подберем идеальную пару для вас</h3>
					<p className={styles["quiz__descr"]}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>

					<h4 className={styles["quiz-question__title"]}>Какой тип кроссовок рассматриваете?</h4>

					<form className={styles["quiz-form"]} action="">
						{/* <div className={styles["quiz-question"]}>

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

					<div className={styles["quiz-bottom"]}>
						<div className={styles["quiz-count"]}>1 из 4</div>
						<Button text='Следующий шаг' styleClasses='btn-quiz' />
					</div>

				</div>
			</div>
		</section>
	)
}

export default Quiz