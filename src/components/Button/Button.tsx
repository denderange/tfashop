import './Button.css'

type ButtonProps = {
	text: string,
	styleClasses: string,
	ariaLabel?: string,
	children?: any
}

const Button = ({ text, styleClasses, ariaLabel, children }: ButtonProps) => {
	return (
		<button
			className={styleClasses}
			aria-label={ariaLabel}
		>
			{text}{children}
		</button>
	)
}

export default Button