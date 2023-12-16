import Button from '../Button/Button'
import styles from './Catalog.module.css'
import CardProduct from '../CardProduct/CardProduct'

const Catalog = () => {
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
									<input type="text" className={styles["catalog-price__input"]} />
									<input type="text" className={styles["catalog-price__input"]} />
									<div className={styles["catalog-price__element"]}></div>
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
								<strong className={styles["catalog__caption"]}>Пол</strong>
								<div className={[styles["catalog__prop-inner"], styles["catalog-price"]].join(' ')}>
									<table className={styles["sizes-table"]}>
										<caption>Размер</caption>
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
							<Button text='Применить' styleClasses="btn btn-reset btn--secondary" />
							<Button text='сбросить' styleClasses="catalog__reset" />
						</div>
					</div>

					<div className={`${styles["catalog__grid"]}`}>
						<ul className={`grid ${styles["catalog-list"]}`}>
							<li className={styles["catalog-list__item"]}>
								<CardProduct />
							</li>
							<li className={styles["catalog-list__item"]}>
								<CardProduct />
							</li>
							<li className={styles["catalog-list__item"]}>
								<CardProduct />
							</li>
							<li className={styles["catalog-list__item"]}>
								<CardProduct />
							</li>
							<li className={styles["catalog-list__item"]}>
								<CardProduct />
							</li>
							<li className={styles["catalog-list__item"]}>
								<CardProduct />
							</li>
							<li className={styles["catalog-list__item"]}>
								<CardProduct />
							</li>
							<li className={styles["catalog-list__item"]}>
								<CardProduct />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Catalog