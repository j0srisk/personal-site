import Map from 'react-map-gl/maplibre'

function Location() {
	return (
		<Map
			initialViewState={{
				longitude: -97.73333,
				latitude: 30.266666,
				zoom: 6
			}}
			mapStyle="https://api.maptiler.com/maps/streets/style.json?key=92AjonH81Dbzke1Z7145"
			attributionControl={false}
		/>
	)
}

export default Location
