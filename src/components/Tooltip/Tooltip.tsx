import styles from './Tooltip.module.scss'

const Tooltip = () => {
	return (
		<span className={styles["tooltip"]}>
			<button
				className={styles["tooltip__btn"]}
				aria-describedby='tooltip'
				aria-label='Подробности адреса'
			>
				?
			</button>
			<span className={styles["tooltip__txt"]} role='tooltip'>
				<span className={"visually-hidden"}>Tooltip: </span>
				Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке, качестве обслуживания и товара просьба задавать в отдел продаж.
			</span>
		</span>
	)
}

export default Tooltip