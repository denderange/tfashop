import { useState, lazy, Suspense } from 'react'
import iconShow from '../../assets/icons/iconShow.svg'
import iconBasket from '../../assets/icons/iconBasket.svg'
import { Modal } from 'react-responsive-modal';
import styles from './CardProduct.module.scss'
import 'react-responsive-modal/styles.css';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const ModalWindow = lazy(() => import('../ModalWindow/ModalWindow'))

type CardProductProps = {
	id: number,
	description?: string,
	imgSrc: string,
	title: string,
	price: number
}

const CardProduct = ({ imgSrc = "", title = "", price = 0, id }: CardProductProps) => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<article className={styles["product"]}>
			<div className={styles["product__image"]}>
				<img src={imgSrc} alt="Prod title..." />
				<div className={styles["product__btns"]}>
					<button
						className="product__btn"
						aria-label="Показать информацию о товаре"
						data-id={id}
						onClick={onOpenModal}
					>
						<img src={iconShow} alt="Показать информацию о товаре" />
					</button>
					<button
						className="product__btn"
						aria-label="Добавить товар в корзину"
						data-id={id}
					>
						<img src={iconBasket} alt="Добавить товар в корзину" />
					</button>
				</div>
			</div>

			<h3 className={styles["product__title"]}>{title}</h3>
			<span className={styles["product__price"]}>{price} $</span>

			<Modal
				open={open}
				onClose={onCloseModal}
				center
				showCloseIcon={false}
			>
				<Suspense fallback={<LoaderSpinner />}>
					<ModalWindow productId={id} />
				</Suspense>
			</Modal>
		</article>
	)
}

export default CardProduct