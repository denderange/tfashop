import { useState, useEffect } from "react";
import { useFetchAllProductsQuery, useFethcProductByIdQuery } from "../../redux/slices/apiSlice";
import Button from '../Button/Button'
import CardProduct from '../CardProduct/CardProduct'
import RangeSlider from "../RangeSlider/RangeSlider";
import styles from './Catalog.module.css'

const Catalog = () => {
	const [value, setValue] = useState({ min: 0, max: 100 });
	const [products, setProducts] = useState([])

	const getAllProducts = () => {
		const { data, error, isLoading } = useFetchAllProductsQuery();

		if (isLoading) return <p>Loading...</p>;
		if (error) return <p>Error</p>;

		return (
			<li className={styles["catalog-list__item"]} key={data['id']}>
				<CardProduct
					imgSrc={data['image']}
					title={data['title']}
					price={data['price']}
				/>
			</li>
		)
	}

	const getProduct = (productId: string) => {
		const { data, error, isLoading } = useFethcProductByIdQuery(productId);

		if (isLoading) return <p>Loading...</p>;
		if (error) return <p>Error</p>;

		console.log(data)
		// return (
		// 	<div>
		// 		<h1>{data.name}</h1>
		// 		<p>Email: {data.email}</p>
		// 	</div>
		// );
	};
	// getProduct("16")

	const showMore = () => {
		console.log('first')
	}

	const getProducts = () => {
		fetch('https://fakestoreapi.com/products')
			.then(res => {
				return res.json()
			})
			.then(data => {
				if (data) {
					// setProducts(data)
					console.log(data)
				}
			})
			.catch((error) => console.log(error));
	}

	useEffect(() => {
		// getProducts()
		// getProduct("40")
	}, [])

	// console.log(data)


	return (
		<section className={styles["catalog"]}>
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
										<input type="text" className={styles["catalog-price__input"]} />
										<input type="text" className={styles["catalog-price__input"]} />
									</div>

									<div className={styles["catalog-price__element"]}>
										<div>
											<RangeSlider min={0} max={100} step={1} value={value} onChange={setValue} styleClasses={""} />
											<p>The min value is: <span>{value.min}</span></p>
											<p>The max value is: <span>{value.max}</span></p>
										</div>
									</div>
								</div>
							</div>

							<div className={styles["catalog__prop"]}>
								<strong className={styles["catalog__caption"]}>Пол</strong>
								<div className={[styles["catalog__prop-inner"], styles["catalog-price"], styles["catalog__prop-checkboxes"]].join(' ')}>
									<label className={styles["custom-checkbox"]}>
										<input type="checkbox" className={styles["custom-checkbox__field"]} />
										<span className={styles["custom-checkbox__content"]}>Мужской</span>
									</label>
									<label className={styles["custom-checkbox"]}>
										<input type="checkbox" className={styles["custom-checkbox__field"]} />
										<span className={styles["custom-checkbox__content"]}>Женский</span>
									</label>
								</div>
							</div>

							<div className={styles["catalog__prop"]}>
								<strong className={styles["catalog__caption"]}>Размер</strong>
								<div className={[styles["catalog__prop-inner"], styles["catalog-price"]].join(' ')}>
									<table className={styles["sizes-table"]}>
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
								<Button text='Применить' styleClasses="btn btn--secondary" />
								<Button text='сбросить' styleClasses="btn-small" />
							</div>
						</div>
					</div>

					<div className={`${styles["catalog__grid"]}`}>
						<ul className={`grid ${styles["catalog-list"]}`}>
							{/* {products.map(product => (
								<li className={styles["catalog-list__item"]} key={product['id']}>
									<CardProduct
										imgSrc={product['images'][0]}
										title={product['title']}
										price={product['price']}
									/>
								</li>
							))} */}
						</ul>

						<Button
							text='Показать еще'
							styleClasses="btn catalog__more btn--primary"
							handleClick={showMore}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Catalog