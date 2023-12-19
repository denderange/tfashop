import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const EmbeddedMap = () => {
	return (
		<YMaps>
			<Map defaultState={{
				center: [53.145597, 29.225538],
				zoom: 9,
			}}
				width={670}
				height={490}
			>
				<Placemark geometry={[53.165, 29.19]} />
			</Map>
		</YMaps>
	)
}

export default EmbeddedMap