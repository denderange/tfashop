import Button from '../Button/Button'
import styles from './Instagr.module.css'

const Instgrm = () => {
	return (
		<section className={styles["inst"]}>
			<h2 className={"visually-hidden"}>Связь с нами через instagram.</h2>
			<div className={`container ${styles["inst__container"]}`}>

				<div className={styles["inst__left"]}>
					<form className={styles["form-feedback"]}>
						<h3 className={`title ${styles["inst__title"]}`}>Есть вопросы?</h3>
						<p className={styles["inst__descr"]}>Заполните форму и наш менеджер свяжется с вами</p>

						<input
							type="text"
							className={`input-feedback ${styles["form-feedback__input"]}`} placeholder='Ваше имя'
						/>
						<input
							type="tel"
							className={`input-feedback ${styles["form-feedback__input"]}`} placeholder='Номер телефона'
						/>
						<Button text='Отправить' styleClasses='btn btn--primary form-feedback__btn' />
					</form>
				</div>

				<div className={styles["inst__right"]}>
					<a href="" className={styles["inst__link"]}>
						<img src="../src/assets/images/instagram_logo.png" alt="instagram logo image link" />
					</a>
					<div className={styles["inst__content"]}>
						<article className={styles["inst__item"]}>
							<a href="" target="_blank">
								<img src="" alt="instagram photo" />
							</a>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Instgrm