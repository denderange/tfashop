import { lazy, Suspense, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from './CartMini.module.scss'
import prodImg from '../../assets/images/default-product-image.webp'
import iconTrash from '../../assets/icons/iconTrash.svg'
import Button from '../Button/Button'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
const OrderPlacing = lazy(() => import('../OrderPlacing/OrderPlacing'))
import { useSelector, useDispatch } from 'react-redux'
// import { removeFromCart } from '../../redux/slices/cartSlice';

type CartMiniProps = {
	isVisible: boolean | false
}

const CartMini = ({ isVisible }: CartMiniProps) => {
	// const dispatch = useDispatch()
	const cartItems = useSelector((state: any) => state.cart)
	const [open, setOpen] = useState(false);
	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	// TODO handle remove the item from state -->
	// const removeFromCartHandler = async (title: string) => {
	// 	dispatch(removeFromCart(title))
	// }

	return (
		<div className={isVisible ? `${styles["mini-cart"]} ${styles["mini-cart--visible"]}` : styles["mini-cart"]}>
			<SimpleBar style={{ maxHeight: 300 }}>
				<div className={styles["mini-cart__top"]}>
					<ul className={styles["mini-cart__list"]}>
						{cartItems.map((item: any) => (
							<li className={styles["mini-cart__item"]} key={item.productTitle}>
								<article className={`${styles["mini-cart__product"]} ${styles["mini-product"]}`}>
									<div className={styles["mini-product__image"]}>
										<img src={prodImg} alt="" />
									</div>
									<div className={styles["mini-product__content"]}>
										<div className={styles["mini-product__text"]}>
											<h3 className={styles["mini-product__title"]}>{item.productTitle}</h3>
											<span className={styles["mini-product__price"]}>{item.price}$</span>
										</div>
										<button className={styles["mini-product__delete"]} aria-label="Remove from cart">
											<img src={iconTrash} alt="Remove from cart" />
										</button>
									</div>
								</article>
							</li>
						))}
					</ul>
				</div>
			</SimpleBar>

			<div className={styles["mini-cart__bottom"]}>
				<div className={styles["mini-cart__total"]}>
					<span className={styles["mini-cart__txt"]}>Итого: </span>
					<span className={styles["mini-cart__sum"]}>
						{cartItems.reduce((sum: any, item: any) => sum + item.price, 0).toFixed(2)} $
					</span>
				</div>
				<Button
					text="Оплатить"
					styleClasses="btn btn--primary btn-mini-cart"
					handleClick={onOpenModal}
				/>
			</div>

			<Modal
				open={open}
				onClose={onCloseModal}
				center
				showCloseIcon={false}
			>
				<Suspense fallback={<LoaderSpinner />}>
					<OrderPlacing />
				</Suspense>
			</Modal>
		</div>
	)
}

export default CartMini