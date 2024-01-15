import prodImg from '../../assets/images/quiz-photo-1.jpg'
import iconArrow from '../../assets/icons/iconArrow.svg'
import styles from './OrderPlacing.module.scss'
import { useRef } from 'react'

const OrderPlacing = () => {
	const orderListRef = useRef<HTMLUListElement>(null)
	const orderBtnIconRef = useRef<HTMLImageElement>(null)

	const showOrderList = () => {
		orderListRef?.current?.classList.toggle(`${styles['cart-modal-order__list--show']}`)
		orderBtnIconRef?.current?.classList.toggle(`${styles["img-rotate"]}`)
	}
	return (
		<div className={styles["modal-content"]}>
			<div className={styles["cart-modal__top"]}>
				<h2 className={styles["cart-modal__title"]}>Оформление заказа</h2>
				<span className={styles["cart-modal__order-number"]}>
					Заказ {new Date().getMilliseconds()}
				</span>
			</div>

			<div className={styles["cart-modal-order"]}>
				<div className={styles["cart-modal-order__top"]}>
					<div className={`
					${styles["cart-modal-order__quantitty"]} 
					${styles["span"]}
					`}
					>
						Товаров в заказе: <span>XXX шт</span>
					</div>
					<div className={`
					${styles["cart-modal-order__sum"]} 
					${styles["span"]}
					`}
					>
						Общая сумма заказа: <span>99999 $</span>
					</div>
					<div className={styles["cart-modal-order__content"]}>
						<button
							className={styles["cart-modal-order__show"]}
							onClick={showOrderList}
						>
							Состав заказа
							<img src={iconArrow} alt="" ref={orderBtnIconRef} />
						</button>
						<ul className={styles["cart-modal-order__list"]} ref={orderListRef}>
							<li className={styles["cart-modal-order__item"]}>
								<article className={`${styles["cart-modal-order__product"]} ${styles["cart-modal-product"]}`}>
									<div className={styles["cart-modal-product__image"]}>
										<img src={prodImg} alt="" />
									</div>
									<div className={styles["cart-modal-product__content"]}>
										<div className={styles["cart-modal-product__text"]}>
											<h3 className={styles["cart-modal-product__title"]}>Prod t</h3>
											<span className={styles["cart-modal-product__price"]}>$</span>
										</div>
										<button
											className={styles["cart-modal-product__delete"]}
											aria-label="Remove from cart"
										>
											Удалить
										</button>
									</div>
								</article>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<form className={styles["cart-modal__form"]}>
				<input type="text" className={`${styles["input"]} ${styles["cart-modal-input"]}`} name="name" placeholder="Ваше имя" />
				<input type="tel" className={`${styles["input"]} ${styles["cart-modal-input"]}`} name="tel" placeholder="Номер телефона" />
				<input type="email" className={`${styles["input"]} ${styles["cart-modal-input"]}`} name="email" placeholder="E-mail" />
				<button className="btn btn--primary cart-modal__btn">Оформить заказ</button>
			</form>
		</div>
	)
}

export default OrderPlacing

// className={styles["cart-modal"]}