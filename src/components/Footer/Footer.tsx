import { navLinks } from '../../utils/navlinks'
import { Link } from 'react-scroll'
import styles from './Footer.module.css'

const Footer = () => {
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
		<footer className={styles["footer"]}>
			<div className={`container ${styles["footer__container"]}`}>

				<div className={styles["footer__left"]}>
					<Link to={''} className={`${styles["logo"]} ${styles["footer__logo"]}`}>
						TFA-Shop
					</Link>
				</div>

				<div className={styles["footer__right"]}>
					<nav className={`${styles["nav"]} ${styles["footer__nav"]}`}>
						<ul className={styles["nav__list"]}>
							{mapNavLinks()}
						</ul>
					</nav>

				</div>
			</div>
		</footer>
	)
}

export default Footer