import { useState, lazy, Suspense, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../utils/navlinks'
import styles from './Header.module.css'
const CartMini = lazy(() => import('../Cart/CartMini'))

const Header = () => {
	const [cartIsVisible, setCartIsVisible] = useState(false)
	// @ts-ignore

	const mapNavLinks = () => (
		navLinks.map(item => (
			<li className={styles["nav__item"]} key={item.linkText}>
				<Link to={item.href} className={styles["nav__link"]}>
					{item.linkText}
				</Link>
			</li>
		))
	)

	const handleClickCart = () => {
		setCartIsVisible(!cartIsVisible)
	}

	// useEffect(() => {
	// 	document.addEventListener('click', (e: any) => {
	// 		const miniCart = document.querySelector('.mini-cart')
	// 		if (!e.target.classList.contains('mini-cart') && !e.target.classList.contains('cart__btn')) {
	// 			miniCart?.classList.remove('mini-cart--visible')
	// 		}
	// 	})
	// }, [])

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
							onClick={handleClickCart}
						>
							<img src="../src/assets/icons/iconBasket.svg" alt="basket" />
							<div className={styles["cart__count"]}>1</div>
						</button>
					</div>
					<Suspense fallback={<div>loading...</div>}>
						<CartMini isVisible={cartIsVisible} />
					</Suspense>
				</div>

			</div >
		</header >
	)
}

export default Header

// ${styles[""]}