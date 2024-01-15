import { Link } from 'react-scroll';
import Button from '../Button/Button';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles["hero"]}>
			<span className={styles["hero__bg-text"]} aria-hidden="true">TFA-Shop</span>
			<div className={`container ${styles["hero__container"]}`}>
				<h1 className={styles["hero__title"]}>
					Товары известных брендов <br />
					с доставкой по России и СНГ
				</h1>
				<p className={styles["hero__descr"]}>
					Мы продаем Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам
				</p>
				<Link
					className={styles["nav__link"]}
					activeClass="active"
					to="catalog"
					spy={true}
					smooth={true}
					offset={-65}
					duration={500}
				>
					<Button text='Перейти к покупкам' styleClasses="btn btn--primary js-move-to" />
				</Link>
			</div>
		</section>
	)
}

export default Hero