import { useState, useEffect } from 'react'
import './RangeSlider.css'

type RangeSliderProps = {
	styleClasses: string,
	step: number,
	min: number,
	max: number,
	value?: any,
	onChange?: any
}

const RangeSlider = ({ step, min, max, value, onChange, styleClasses }: RangeSliderProps) => {
	const [minValue, setMinValue] = useState(value ? value.min : min);
	const [maxValue, setMaxValue] = useState(value ? value.max : max);

	const handleMinChange = (e: any) => {
		e.preventDefault();
		const newMinVal = Math.min(+e.target.value, maxValue - step);
		if (!value) setMinValue(newMinVal);
		onChange({ min: newMinVal, max: maxValue });
	};

	const handleMaxChange = (e: any) => {
		e.preventDefault();
		const newMaxVal = Math.max(+e.target.value, minValue + step);
		if (!value) setMaxValue(newMaxVal);
		onChange({ min: minValue, max: newMaxVal });
	};

	const minPos = ((minValue - min) / (max - min)) * 100;
	const maxPos = ((maxValue - min) / (max - min)) * 100;

	useEffect(() => {
		if (value) {
			setMinValue(value.min);
			setMaxValue(value.max);
		}
	}, [value]);

	return (
		<div className="range-slider">
			<div className={`${styleClasses} input-wrapper`}>
				<input
					className="input"
					type="range"
					value={minValue}
					min={min}
					max={max}
					step={step}
					onChange={handleMinChange}
				/>
				<input
					className="input"
					type="range"
					value={maxValue}
					min={min}
					max={max}
					step={step}
					onChange={handleMaxChange}
				/>

				<div className="control-wrapper">
					<div className="control" style={{ left: `${minPos}%` }} />
					<div className="rail">
						<div
							className="inner-rail"
							style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
						/>
					</div>
					<div className="control" style={{ left: `${maxPos}%` }} />
				</div>
			</div>
		</div>
	)
}
export default RangeSlider

// example of nesting:
//
// const App = () => {
//   const [value, setValue] = React.useState({ min: 0, max: 100 });

//   return (
//     <div>
//       <RangeSlider min={0} max={100} step={5} value={value} onChange={setValue} />
//       <p>The min value is: <span>{value.min}</span></p>
//       <p>The max value is: <span>{value.max}</span></p>
//     </div>
//   );
// }