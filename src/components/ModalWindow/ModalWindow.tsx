import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import styles from './ModalWindow.module.scss'
import './defaultS.scss'
import starImg from '../../assets/icons/star.svg'
import { useFethcProductByIdQuery } from '../../redux/slices/apiSlice';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

type ModalWindowProps = {
	productId: number
}

const ModalWindow = ({ productId }: ModalWindowProps) => {
	const { data, error, isLoading } = useFethcProductByIdQuery(productId);

	const avalibleSizes = [34, 35, 36, 37, 38]

	const choseSize = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		document.querySelectorAll('button')
			.forEach(el => {
				el.classList.remove(`${styles['modal-sizes__btn--active']}`)
			})

		e.currentTarget.classList.add(`${styles['modal-sizes__btn--active']}`)
	}

	if (isLoading) return <LoaderSpinner />;
	if (error) return <p>Error</p>;

	return (
		<div className={styles["modal-content"]}>
			<div className={styles["prod-modal__top"]}>

				{/* Slider : */}
				<div className={styles["modal-slider"]}>
					<div className={styles["modal-slider__container"]}>
						<Swiper
							spaceBetween={20}
							slidesPerView={1}
							autoplay={{
								delay: 2000,
								disableOnInteraction: false,
							}}
							navigation={true}
							modules={[Autoplay, Navigation]}
							className={styles["swiper-wrapper"]}
						>
							<SwiperSlide className={styles["swiper-slide"]}>
								<img src={data.image} alt="" />
							</SwiperSlide>
							<SwiperSlide className={styles["swiper-slide"]}>
								<img src={data.image} alt="" />
							</SwiperSlide>
							<SwiperSlide className={styles["swiper-slide"]}>
								<img src={data.image} alt="" />
							</SwiperSlide>
						</Swiper>
					</div>

					<div className={styles["modal-preview"]}>
						<div className={styles["modal-preview__item"]} data-index="0">
							<img src={data.image} alt="" />
						</div>
						<div className={styles["modal-preview__item"]} data-index="1">
							<img src={data.image} alt="" />
						</div>
						<div className={styles["modal-preview__item"]} data-index="2">
							<img src={data.image} alt="" />
						</div>
					</div>
				</div>

				<div className={styles["modal-info"]}>
					<div className={styles["modal-info__top"]}>
						<span className={styles["modal-info__vendor"]}>
							Артикул: XXXXXX
						</span>
						<span className={styles["modal-info__quantity"]}>
							В наличии: <span>XXX штук</span>
						</span>
					</div>
					<h3 className={styles["modal-info__title"]}>
						{data.title}
					</h3>
					<div className={styles["modal-info__rate"]}>
						<img src={starImg} alt="Рейтинг 5 из 5" />
						<img src={starImg} alt="" />
						<img src={starImg} alt="" />
						<img src={starImg} alt="" />
						<img src={starImg} alt="" />
						<div>рейтинг: {data.rating.rate}</div>
					</div>

					<div className={styles["modal-info__sizes"]}>
						<span className={styles["modal-info__subtitle"]}>Выберите размер</span>

						<ul className={`${styles["modal-sizes"]} ${styles["modal-info__sizes-list"]}`}>
							{avalibleSizes.map(size => (
								<li className={styles["modal-sizes__item"]} key={size}>
									<button
										className={`${styles["modal-sizes__btn"]} `}
										onClick={(e) => choseSize(e)}
									>
										{size}
									</button>
								</li>
							))}
						</ul>

					</div>

					<div className={styles["modal-info__price"]}>
						<span className={styles["modal-info__current-price"]}>
							{data.price}
						</span>
						<span className={styles["modal-info__old-price"]}>
							{data.price - 5}
						</span>
					</div>

					<button className="btn btn--primary modal-info__order">
						Заказать
					</button>

					<ul className={`${styles["modal-info__note"]} ${styles["modal-note"]}`}>
						<li className={styles["modal-note__item"]}>Бесплатная доставка до двери</li>
						<li className={styles["modal-note__item"]}>Оплата заказа при получении</li>
						<li className={styles["modal-note__item"]}>Обмен в течении двух недель</li>
					</ul>
				</div>
			</div>

			<div className={`${styles["prod-modal__bottom"]} ${styles["prod-bottom"]}`}>
				<div className={styles["prod-bottom__column"]}>
					<h3 className={styles["prod-bottom__title"]}>Описание</h3>
					<p className={styles["prod-bottom__descr"]}>
						{data.description}
					</p>
				</div>
				<div className={styles["prod-bottom__column"]}>
					<h3 className={styles["prod-bottom__title"]}>Характеристики</h3>
					<div className={styles["prod-chars"]}>
						<p className={`${styles["prod-bottom__descr"]} ${styles["prod-chars__item"]}`}>Пол: Мужской</p>
						<p className={`${styles["prod-bottom__descr"]} ${styles["prod-chars__item"]}`}>Цвета: Разноцветный</p>
						<p className={`${styles["prod-bottom__descr"]} ${styles["prod-chars__item"]}`}>Состав: Кожа, текстиль, резина</p>
						<p className={`${styles["prod-bottom__descr"]} ${styles["prod-chars__item"]}`}>Страна: Вьетнам</p>
					</div>
				</div>
			</div>

			<iframe src="https://www.youtube.com/embed/F0GOOP82094" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles["prod-modal__video"]}></iframe>
		</div>
	)
}

export default ModalWindow

// className={styles[""]}