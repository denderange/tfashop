import { useState } from 'react';

import Button from '../Button/Button';
import styles from './Quiz.module.css';
import Step1 from './Step1';
import Step4 from './Step4';
import Step3 from './Step3';

const Quiz = () => {
	const [steps, setSteps] = useState(1)

	return (
		<section className={styles["quiz"]}>
			<div className="container">
				<h2 className="visually-hidden">Подбор по параметрам</h2>
				<div className={styles["quiz__content"]}>
					<h3 className={`title ${styles["quiz__title"]}`}>Мы подберем идеальную пару для вас</h3>
					<p className={styles["quiz__descr"]}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>

					{/* <Step1 /> */}
					<Step3 />
					{/* <Step4 /> */}

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