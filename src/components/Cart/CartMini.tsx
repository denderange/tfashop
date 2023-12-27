import { useRef } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from './CartMini.module.css'
import prodImg from '../../assets/images/quiz-photo-1.jpg'
import iconTrash from '../../assets/icons/iconTrash.svg'
import Button from '../Button/Button'

type CartMiniProps = {
	isVisible: boolean | false
}

const CartMini = ({ isVisible }: CartMiniProps) => {

	return (
		<div className={isVisible ? `${styles["mini-cart"]} ${styles["mini-cart--visible"]}` : styles["mini-cart"]}>
			<SimpleBar style={{ maxHeight: 300 }}>
				<div className={styles["mini-cart__top"]}>
					<ul className={styles["mini-cart__list"]}>
						<li className={styles["mini-cart__item"]}>
							<article className={`${styles["mini-cart__product"]} ${styles["mini-product"]}`}>
								<div className={styles["mini-product__image"]}>
									<img src={prodImg} alt="" />
								</div>
								<div className={styles["mini-product__content"]}>
									<div className={styles["mini-product__text"]}>
										<h3 className={styles["mini-product__title"]}>Prod t</h3>
										<span className={styles["mini-product__price"]}>$</span>
									</div>
									<button className={styles["mini-product__delete"]} aria-label="Remove from cart">
										<img src={iconTrash} alt="Remove from cart" />
									</button>
								</div>
							</article>
						</li>
						<li className={styles["mini-cart__item"]}>
							<article className={`${styles["mini-cart__product"]} ${styles["mini-product"]}`}>
								<div className={styles["mini-product__image"]}>
									<img src={prodImg} alt="" />
								</div>
								<div className={styles["mini-product__content"]}>
									<div className={styles["mini-product__text"]}>
										<h3 className={styles["mini-product__title"]}>Prod t</h3>
										<span className={styles["mini-product__price"]}>$</span>
									</div>
									<button className={styles["mini-product__delete"]} aria-label="Remove from cart">
										<img src={iconTrash} alt="Remove from cart" />
									</button>
								</div>
							</article>
						</li>
						<li className={styles["mini-cart__item"]}>
							<article className={`${styles["mini-cart__product"]} ${styles["mini-product"]}`}>
								<div className={styles["mini-product__image"]}>
									<img src={prodImg} alt="" />
								</div>
								<div className={styles["mini-product__content"]}>
									<div className={styles["mini-product__text"]}>
										<h3 className={styles["mini-product__title"]}>Prod t</h3>
										<span className={styles["mini-product__price"]}>$</span>
									</div>
									<button className={styles["mini-product__delete"]} aria-label="Remove from cart">
										<img src={iconTrash} alt="Remove from cart" />
									</button>
								</div>
							</article>
						</li>
						<li className={styles["mini-cart__item"]}>
							<article className={`${styles["mini-cart__product"]} ${styles["mini-product"]}`}>
								<div className={styles["mini-product__image"]}>
									<img src={prodImg} alt="" />
								</div>
								<div className={styles["mini-product__content"]}>
									<div className={styles["mini-product__text"]}>
										<h3 className={styles["mini-product__title"]}>Prod t</h3>
										<span className={styles["mini-product__price"]}>$</span>
									</div>
									<button className={styles["mini-product__delete"]} aria-label="Remove from cart">
										<img src={iconTrash} alt="Remove from cart" />
									</button>
								</div>
							</article>
						</li>
					</ul>
				</div>
			</SimpleBar>

			<div className={styles["mini-cart__bottom"]}>
				<div className={styles["mini-cart__total"]}>
					<span className={styles["mini-cart__txt"]}>Итого: </span>
					<span className={styles["mini-cart__sum"]}>999 $</span>
				</div>
				<Button
					text="В корзину"
					styleClasses="btn btn--primary btn-mini-cart"
				/>
			</div>
		</div>
	)
}

export default CartMini