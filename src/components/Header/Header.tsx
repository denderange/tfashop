import { useState, lazy, Suspense } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import { navLinks } from '../../utils/navlinks'
import { Link } from 'react-scroll'
import iconBasket from '../../assets/icons/iconBasket.svg'
import styles from './Header.module.css'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner'
const CartMini = lazy(() => import('../Cart/CartMini'))

const Header = () => {
	const [cartIsVisible, setCartIsVisible] = useState(false)
	const screenMedium = useMediaQuery('(min-width: 500px)');
	const [burgerActive, setBurgerActive] = useState(false)

	const toggleBurger = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.currentTarget.classList.toggle(`${styles["burger--active"]}`)
		setBurgerActive(!burgerActive)
	}

	const mapNavLinks = () => (
		navLinks.map(item => (
			<li className={styles["nav__item"]} key={item.linkText}>
				<Link
					className={styles["nav__link"]}
					activeClass={styles["nav__list--active"]}
					to={item.id}
					spy={true}
					smooth={true}
					offset={-65}
					duration={500}
				>
					{item.linkText}
				</Link>
			</li>
		))
	)

	const handleClickCart = () => {
		setCartIsVisible(!cartIsVisible)
	}

	return (
		<header className={styles["header"]}>
			<div className={`container grid ${styles["header__container"]}`}>

				<div className={styles["header__left"]}>
					{screenMedium ? (
						<Link to={''} className={`${styles["logo"]} ${styles["header__logo"]}`}>
							TFA-Shop
						</Link>
					) : (
						<button
							className={styles["burger"]}
							onClick={toggleBurger}
						>
							<span className={styles["burger__line"]}></span>
						</button>
					)}
				</div>

				<div className={styles["header__right"]}>
					{/* {screenMedium ? ( */}
					<nav className={`${styles["nav"]} ${styles["header__nav"]}`}>
						<ul className={burgerActive ?
							styles["nav__list"] + " " + styles["open"] :
							styles["nav__list"]}
						>
							{mapNavLinks()}
						</ul>
					</nav>
					{/* ) : null} */}


					<div className={`${styles["cart"]} ${styles["header__cart"]}}`}>
						<button
							className={`${styles["cart__btn"]}}`}
							onClick={handleClickCart}
						>
							<img src={iconBasket} alt="basket" />

							<div className={styles["cart__count"]}>
								14
							</div>
						</button>
					</div>
					<Suspense fallback={<LoaderSpinner />}>
						<CartMini isVisible={cartIsVisible} />
					</Suspense>
				</div>
			</div >
		</header >
	)
}

export default Header