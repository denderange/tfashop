import { useState } from 'react'
import styles from './Quiz.module.scss'
import picBot1 from '../../assets/images/quiz-pictures/1.webp'
import picBot2 from '../../assets/images/quiz-pictures/2.webp'
import picBot3 from '../../assets/images/quiz-pictures/3.webp'
import picBot4 from '../../assets/images/quiz-pictures/4.webp'
import picBot5 from '../../assets/images/quiz-pictures/5.webp'
import picBot6 from '../../assets/images/quiz-pictures/6.webp'
import { useDispatch } from 'react-redux'
import { setShoesKind } from '../../redux/slices/quizSlice'

interface Shoes {
	kind: string,
	img: string
}

const shoes: Shoes[] = [
	{ kind: "беговые", img: picBot1 },
	{ kind: "треккинговые", img: picBot2 },
	{ kind: "теннисные", img: picBot3 },
	{ kind: "баскетбольные", img: picBot4 },
	{ kind: "скейтерские", img: picBot5 },
	{ kind: "зимние", img: picBot6 }
]

const Step1 = () => {
	const dispatch = useDispatch()
	const [chosenVariants, setChosenVariants] = useState<string[]>([])

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const chosenShoes = chosenVariants.filter(shoe => shoe !== e.currentTarget.name)

		chosenVariants.includes(e.currentTarget.name) ? setChosenVariants(chosenShoes) : setChosenVariants([...chosenVariants, e.currentTarget.name])

		dispatch(setShoesKind(chosenVariants))
	}

	return (
		<>
			<h4 className={styles["quiz-question__title"]}>Какой тип кроссовок рассматриваете?</h4>

			<form className={styles["quiz-form"]} action="">

				<ul className={styles["quiz-question__answers"]}>
					{shoes.map(shoe => (
						<li className={styles["quiz-step1__item"]} key={shoe.kind}>
							<label className={styles["quiz-step1__label"]}>
								<div className={styles["quiz-step1__img-wrapper"]}>
									<img src={shoe.img} alt={shoe.kind} />
								</div>
								<div className={styles["quiz-step1__input-wrapper"]}>
									<input
										type="checkbox"
										name={shoe.kind}
										checked={chosenVariants.includes(shoe.kind)}
										onChange={(e) => handleCheck(e)}
									/>
									<span>{shoe.kind}</span>
								</div>
							</label>
						</li>
					))}
				</ul>

			</form>
		</>
	)
}

export default Step1