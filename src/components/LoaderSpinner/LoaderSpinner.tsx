import styles from './LoaderSpinner.module.scss'

const LoaderSpinner = () => {
	const dots = [...Array(15).keys()]

	return (
		<div className={styles["loader__dots"]}>
			{dots.map((item) => (
				<span key={item} style={{ "--i": item + 1 } as React.CSSProperties}>
				</span>
			))}
		</div>
	)
}

export default LoaderSpinner