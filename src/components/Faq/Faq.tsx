import iconClose from '../../assets/icons/iconClose.svg'
import styles from './Faq.module.scss'

interface IFaqList {
	question: string
	answer: string
}

const faqList: IFaqList[] = [
	{
		question: 'Какие виды обуви считаются классикой?',
		answer: 'Классической обувью являются туфли на каблуке, лодочки, ботинки на шнуровке, мокасины и балетки.',
	},
	{
		question: 'В каких случаях следует носить кроссовки?',
		answer: 'Кроссовки подходят для активных видов спорта, прогулок и повседневной носки.',
	},
	{
		question: 'Как правильно выбрать размер обуви?',
		answer: 'Размер обуви определяется размером стопы в сантиметрах, которая делится на два и снова прибавляется к полученному результату. К примеру, если у вас длина cтопы 26 см, тогда берем 26 см : 2 = 13 см, добавляем величину длины стопы 13 см + 26 = 39 размер.',
	},
	{
		question: 'Как часто следует менять стельки в обуви?',
		answer: 'Стельки следует менять каждые 3-6 месяцев, в зависимости от интенсивности использования обуви.',
	},
	{
		question: 'Как ухаживать за замшевой обувью?',
		answer: 'Замшевую обувь следует очищать щеткой и использовать специальные средства для ухода за ней.',
	},
]

const Faq = () => {

	const toggleFaq = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.currentTarget.classList.toggle(`${styles["open"]}`)
	}

	return (
		<section className={styles["faq"]} id="faq">
			<div className={`container ${styles["faq__container"]}`}>
				<h2 className={`title ${styles["faq__title"]}`}>Часто задаваемые вопросы</h2>

				<ul className={styles["accordion__list"]}>
					{faqList.map(item => (
						<li className={styles["accordion__item"]} key={item.question}>
							<button
								className={styles["accordion__control"]}
								aria-expanded="false"
								onClick={toggleFaq}
							>
								<span className={styles["accordion__title"]}>
									{item.question}
								</span>
								<span className={styles["accordion__icon"]}>
									<img src={iconClose} alt="" />
								</span>
							</button>
							<div className={styles["accordion__content"]} aria-hidden="true">
								<p>{item.answer}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Faq