import { useState } from 'react'
import imgBg from '../../assets/images/quiz-pictures/qs2.webp'
import styles from './Quiz.module.scss'
import { useDispatch } from 'react-redux'
import { setShoesSize } from '../../redux/slices/quizSlice'

const sizes = ["менее 36", "36-38", "39-41", "42-44", "45 и больше"]

const Step2 = () => {
	const dispatch = useDispatch()
	const [checkedSize, setCheckedSize] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCheckedSize(e.currentTarget.value)
		dispatch(setShoesSize(checkedSize))
	}

	return (
		<>
			<h4 className={styles["quiz-question__title"]}>Какой размер вам подойдёт?</h4>
			<div className={styles["quiz-size__container"]}>
				<form className={styles["quiz-size__form"]}>
					<fieldset>
						{sizes.map((size) => (
							<span key={size}>
								<input
									type="radio"
									name={size}
									value={size}
									id={size}
									checked={checkedSize === size}
									onChange={(e) => handleInputChange(e)}
									className={styles["quiz-size__checkbox"]}
								/>
								<label className={styles["quiz-question__label"]} htmlFor={size}>
									<span>{size}</span>
								</label>
							</span>
						))}
					</fieldset>
				</form>

				<div className={styles["quiz-size__image-wrapper"]}>
					<img src={imgBg} alt="" />
				</div>
			</div>
		</>
	)
}

export default Step2