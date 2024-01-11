import iconVk from '../../assets/icons/iconVK.svg'
import iconInstagramm from '../../assets/icons/iconInstagram.svg'
import EmbeddedMap from '../EmbeddedMAp/EmbeddedMap'
import Tooltip from '../Tooltip/Tooltip'
import styles from './Contacts.module.css'

const Contacts = () => {
	return (
		<section className={styles["contacts"]} id="contacts">
			<div className={`container ${styles["contacts__container"]}`}>
				<div className={styles["contacts__text"]}>
					<h2 className={`title ${styles["contacts__title"]}`}>
						Контакты
					</h2>
					<div className={styles["contacts__item"]}>

						<h3 className={styles["contacts__subtitle"]}>
							Главный офис
							<Tooltip />
						</h3>

						<a href="" className={styles["contacts__phone"]}>+0 888 888 99 88</a>
						<span className={styles["contacts__address"]}>г. Бобруйск, ул. Бойченко, 39 к1</span>
					</div>
					<div className={styles["contacts__item"]}>
						<h3 className={styles["contacts__subtitle"]}>Отдел продаж</h3>
						<a href="" className={styles["contacts__phone"]}>+0 999 888 99 88</a>
						<span className={styles["contacts__address"]}>г. Бобруйск, ул. Бойченко, 39 к1</span>
					</div>

					<ul className={styles["social"]}>
						<li className={styles["social__item"]}>
							<a href="" className={[styles["social__link"], styles["social_link--vk"]].join(' ')} aria-label='Мы в вконтакте'>
								<img src={iconVk} alt="VK" />
							</a>
						</li>
						<li className={styles["social__item"]}>
							<a href="" className={[styles["social__link"], styles["social_link--insta"]].join(' ')} aria-label='Мы в инстаграм'>
								<img src={iconInstagramm} alt="Instagram" />
							</a>
						</li>
					</ul>
				</div>

				<div className={styles["contacts__map"]} id="map">
					<EmbeddedMap />
				</div>
			</div>
		</section>
	)
}

export default Contacts