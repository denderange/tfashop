import { useState, useEffect, useRef } from "react";
import Button from '../Button/Button'
import CardProduct from '../CardProduct/CardProduct'
import RangeSlider from "../RangeSlider/RangeSlider";
import styles from './Catalog.module.scss'
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { useDispatch } from 'react-redux';
import { setFilterStore, resetFilterStore } from "../../redux/slices/filterSlice";
import { useFetchAllProductsQuery } from "../../redux/slices/apiSlice";

const Catalog = () => {
	const dispatch = useDispatch()
	const sizesTableRef = useRef<HTMLTableElement>(null)
	const [priceValue, setPriceValue] = useState({ min: 0, max: 10000 });
	const [gender, setGender] = useState('');
	const [size, setSize] = useState(0)
	const [productsQuantity, setProductsQuantity] = useState(6)
	// @ts-ignore
	const { data, error, isLoading } = useFetchAllProductsQuery();

	const onClickSize = (e: any) => {
		sizesTableRef?.current?.querySelectorAll("td").forEach(item => {
			item.classList.remove(styles["sizes-table--active"])

			setSize(Number(e?.currentTarget?.innerText))

			e?.currentTarget?.classList.add(styles["sizes-table--active"])
		})
	}

	const showProducts = () => {
		const productsArray = []

		if (isLoading) return <LoaderSpinner />;
		if (error) return <p>Error</p>;

		for (let i = 0; i < data.length; i++) {
			if (i < productsQuantity) {
				productsArray.push(
					<li className={styles["catalog-list__item"]} key={data[i]['id']}>
						<CardProduct
							imgSrc={data[i]['image']}
							title={data[i]['title']}
							price={data[i]['price']}
							id={data[i]['id']}
						/>
					</li>
				)
			}
		}

		return productsArray
	}

	const showMore = (e: any) => {
		setProductsQuantity(productsQuantity + 3)
		if (productsQuantity >= data.length - 3) {
			e.currentTarget.style.display = "none"
		}
	}

	const handleBtnAccept = () => {
		dispatch(setFilterStore({
			price: { min: priceValue.min, max: priceValue.max },
			gender: gender,
			size: size,
			quantity: productsQuantity
		}))

		alert(`
		Выбрана цена от ${priceValue.min} до ${priceValue.max}, 
		выбран пол: ${gender},
		выбран размер: ${size}
		`)
	}

	const handleBtnReset = () => {
		setPriceValue({ min: 0, max: 10000 })
		setGender('')
		setSize(0)
		dispatch(resetFilterStore())

		sizesTableRef?.current?.querySelectorAll("td").forEach(item => {
			item.classList.remove(styles["sizes-table--active"])
		})
	}

	useEffect(() => {
		sizesTableRef?.current?.querySelectorAll("td").forEach(item => {
			item.addEventListener('click', (e) => onClickSize(e))
		})
	}, [])

	return (
		<section className={styles["catalog"]} id="catalog">
			<div className={`container ${styles["catalog__container"]}`}>
				<h2 className={`title ${styles["catalog__title"]}`}>Каталог</h2>

				<div className={`grid ${styles["catalog__content"]}`}>
					<div className={styles["catalog__left"]}>
						<div className={styles["catalog__filters"]}>
							<h3 className={styles["catalog__subtitle"]}>Подбор <br /> по параметрам</h3>
							<div className={styles["catalog__prop"]}>
								<strong className={styles["catalog__caption"]}>Цена, руб</strong>
								<div className={[styles["catalog__prop-inner"], styles["catalog-price"]].join(' ')}>
									<div className={styles["catalog-price__wrapper"]}>
										<input
											type="text"
											className={styles["catalog-price__input"]}
											value={priceValue.min}
											onChange={() => { }}
										/>
										<input
											type="text"
											className={styles["catalog-price__input"]}
											value={priceValue.max}
											onChange={() => { }}
										/>
									</div>
									<RangeSlider min={0} max={10000} step={1} value={priceValue} onChange={setPriceValue} styleClasses={""} />
								</div>
							</div>

							<div className={styles["catalog__prop"]}>

								<form className={styles["catalog__prop-checkboxes"]}>
									<fieldset>
										<legend className={styles["catalog__caption"]}>Пол</legend>
										<div>
											<input
												type="radio"
												id="male"
												name="gender"
												checked={gender === "male"}
												className={styles["custom-checkbox__field"]}
												onChange={(e) => setGender(e.currentTarget.id)}
											/>
											<label htmlFor="male" className={styles["custom-checkbox"]}>
												<span className={styles["custom-checkbox__content"]}>Мужской</span>
											</label>
										</div>

										<div>
											<input
												type="radio"
												id="female"
												name="gender"
												checked={gender === "female"}
												className={styles["custom-checkbox__field"]}
												onChange={(e) => setGender(e.currentTarget.id)}
											/>
											<label htmlFor="female" className={styles["custom-checkbox"]}>
												<span className={styles["custom-checkbox__content"]}>Женский</span>
											</label>
										</div>
									</fieldset>
								</form>
							</div>

							<div className={styles["catalog__prop"]}>
								<strong className={styles["catalog__caption"]}>Размер</strong>
								<div className={[styles["catalog__prop-inner"], styles["catalog-price"]].join(' ')}>
									<table className={styles["sizes-table"]} ref={sizesTableRef}>
										<caption>Таблица размеров</caption>
										<tbody>
											<tr>
												<td>35</td>
												<td>36</td>
												<td>37</td>
											</tr>
											<tr>
												<td>38</td>
												<td>39</td>
												<td>40</td>
											</tr>
											<tr>
												<td>41</td>
												<td>42</td>
												<td>43</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div className={styles["catalog-filters__btns"]}>
								<button className="btn btn--secondary"
									onClick={handleBtnAccept}>
									Применить
								</button>
								<button className="btn-small"
									onClick={handleBtnReset}>
									сбросить
								</button>
							</div>
						</div>
					</div>

					<div className={`${styles["catalog__grid"]}`}>
						<ul className={`grid ${styles["catalog-list"]}`}>
							{showProducts()}
						</ul>
						<Button
							text='Показать еще'
							styleClasses="btn catalog__more btn--primary"
							// @ts-ignore
							handleClick={showMore}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Catalog