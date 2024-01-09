import Map from 'react-map-gl/maplibre'

function Location() {
	return (
		<Map
			initialViewState={{
				longitude: -122.4,
				latitude: 37.8,
				zoom: 5
			}}
			mapStyle="https://api.maptiler.com/maps/streets/style.json?key=92AjonH81Dbzke1Z7145"
		/>
	)
}

export default Location
