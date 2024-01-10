import Map from 'react-map-gl/maplibre'

function Mapbox() {
	return (
		<Map
			initialViewState={{
				longitude: -95.3698,
				latitude: 29.7604,
				zoom: 6
			}}
			mapStyle="https://api.maptiler.com/maps/streets/style.json?key=92AjonH81Dbzke1Z7145"
			attributionControl={false}
		/>
	)
}

export default Mapbox
