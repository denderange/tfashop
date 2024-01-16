import { useState, lazy, Suspense } from 'react';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
const Step1 = lazy(() => import('./Step1'));
const Step2 = lazy(() => import('./Step2'));
const Step3 = lazy(() => import('./Step3'));
const Step4 = lazy(() => import('./Step4'));
import styles from './Quiz.module.scss';
import { useDispatch } from 'react-redux'
import { resetStateQuizState } from '../../redux/slices/quizSlice';

const Quiz = () => {
	const dispatch = useDispatch()
	const [steps, setSteps] = useState(1)

	const handleNextStep = () => {
		if (steps <= 4) {
			setSteps(steps + 1)
		}
	}

	const handleResetSteps = () => {
		setSteps(1)
		dispatch(resetStateQuizState())
	}

	return (
		<section className={styles["quiz"]} id="quiz">
			<div className="container">
				<h2 className="visually-hidden">Подбор по параметрам</h2>
				<div className={styles["quiz__content"]}>
					<h3 className={`title ${styles["quiz__title"]}`}>Мы подберем идеальную пару для вас</h3>
					<p className={styles["quiz__descr"]}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>

					<div className="quiz__step-container">
						{steps === 1 &&
							<Suspense fallback={<LoaderSpinner />}>
								<Step1 />
							</Suspense>
						}
						{steps === 2 &&
							<Suspense fallback={<LoaderSpinner />}>
								<Step2 />
							</Suspense>
						}
						{steps === 3 &&
							<Suspense fallback={<LoaderSpinner />}>
								<Step3 />
							</Suspense>
						}
						{steps === 4 &&
							<Suspense fallback={<LoaderSpinner />}>
								<Step4 />
							</Suspense>
						}
					</div>

					<div className={styles["quiz-bottom"]}>
						<div className={styles["quiz-count"]}>{steps} из 4</div>
						{steps !== 4 ?
							(
								<button
									className='btn-quiz'
									onClick={handleNextStep}
								>
									Следующий шаг
								</button>
							) :
							<button
								className='btn-quiz'
								onClick={handleResetSteps}
							>
								Новый подбор
							</button>

						}

					</div>

				</div>
			</div>
		</section>
	)
}

export default Quiz