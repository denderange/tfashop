import iconShow from '../../assets/icons/iconShow.svg'
import iconBasket from '../../assets/icons/iconBasket.svg'
import Button from '../Button/Button'
import styles from './CardProduct.module.css'

const CardProduct = () => {
	return (
		<article className={styles["product"]}>
			<div className={styles["product__image"]}>
				<img src="../src/assets/images/img-bot-1.png" alt="Prod title..." />
				<div className={styles["product__btns"]}>
					<Button text='' styleClasses='product__btn' ariaLabel='Показать информацию о товаре'>
						<img src={iconShow} alt="Показать информацию о товаре" />
					</Button>
					<Button text='' styleClasses='product__btn' ariaLabel='Добавить товар в корзину'>
						<img src={iconBasket} alt="Добавить товар в корзину" />
					</Button>
				</div>
			</div>
			<h3 className={styles["product__title"]}>...product title h3...</h3>
			<span className={styles["product__price"]}>...price $...</span>
		</article>
	)
}

export default CardProduct