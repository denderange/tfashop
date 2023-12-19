import { Link } from 'react-router-dom'
import { navLinks } from '../../utils/navlinks'
import styles from './Header.module.css'

const Header = () => {

	const mapNavLinks = () => (
		navLinks.map(item => (
			<li className={styles["nav__item"]} key={item.linkText}>
				<Link to={item.href} className={styles["nav__link"]}>
					{item.linkText}
				</Link>
			</li>
		))
	)

	return (
		<header className={styles["header"]}>
			<div className={`container grid ${styles["header__container"]}`}>

				<div className={styles["header__left"]}>
					<Link to={''} className={`${styles["logo"]} ${styles["header__logo"]}`}>
						TFA-Shop
					</Link>
				</div>

				<div className={styles["header__right"]}>
					<nav className={`${styles["nav"]} ${styles["header__nav"]}`}>
						<ul className={styles["nav__list"]}>
							{mapNavLinks()}
						</ul>
					</nav>

					<div className={`${styles["cart"]} ${styles["header__cart"]}}`}>
						<button
							className={`${styles["cart__btn"]}}`}
						>
							<img src="../src/assets/icons/iconBasket.svg" alt="basket" />
							<div className={styles["cart__count"]}>1</div>
						</button>
					</div>
				</div>

			</div >
		</header >
	)
}

export default Header

// ${styles[""]}