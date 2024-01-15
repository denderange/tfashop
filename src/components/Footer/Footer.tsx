import styles from './Footer.module.scss'

const Footer = () => {

	return (
		<footer className={styles["footer"]}>
			<div className={`container ${styles["footer__container"]}`}>
				{new Date().getFullYear()}
				<span> &copy;</span>
				Dennis Polukaroff
				<a href="https://github.com/denderange/tfashop" target="_blank">Github</a>
			</div>
		</footer>
	)
}

export default Footer