import styles from './SectionAbout.module.css'

const SectionAbout = () => {
	return (
		<section className={styles["about"]}>
			<img src="../src/assets/icons/figure-1.svg" alt="" className={styles["about__figure"]} aria-hidden="true" />
			<div className={`container ${styles["about__container"]}`}>
				<div className={styles["about__text"]}>
					<h2 className={`${styles["about__title"]}`}>
						Пара слов о нас
					</h2>
					<p className={styles["about__descr"]}>
						<q className={styles["about__quote"]}>
							Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
						</q>
						<cite className={styles["about__author"]}>
							TFA-shop
						</cite>
					</p>
				</div>

				<div className={styles["about__image"]}>
					<img src="../src/assets/images/img-bot-2.jpg" aria-hidden="true" />
				</div>
			</div>
		</section>
	)
}

export default SectionAbout