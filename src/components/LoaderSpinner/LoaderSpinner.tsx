import styles from './LoaderSpinner.module.css'

const LoaderSpinner = () => {
	const dots = Array.apply(null, Array(15))

	return (
		<div className={styles["loader__dots"]}>
			{dots.map((item, index) => (
				<span key={index} style={{ "--i": index + 1 } as React.CSSProperties}>
				</span>
			))}
		</div>
	)
}

export default LoaderSpinner