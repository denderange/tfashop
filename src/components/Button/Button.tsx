import './Button.css'

type ButtonProps = {
	text: string,
	styleClasses: string,
	ariaLabel?: string,
	children?: any,
	handleClick?: () => void
}

const Button = ({ text, styleClasses, ariaLabel, children, handleClick }: ButtonProps) => {
	return (
		<button
			className={styleClasses}
			aria-label={ariaLabel}
			onClick={handleClick}
		>
			{text}{children}
		</button>
	)
}

export default Button