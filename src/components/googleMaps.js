import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const GoogleMaps = withScriptjs(withGoogleMap((props) => {

	const [isOpen, setIsOpen] = useState(false)

	const toogleInfoWindow = (e) => {
		// setIsOpen(!isOpen) 
		console.log('e',  e)
	}

	return (

		<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: 40.73451, lng: -74.00062 }}>
			{props.location.map(location =>
				<Marker 
					key={location.id}
					position={{ lat: location.location.lat, lng: location.location.lng }}
					onClick={ toogleInfoWindow( location.id ) } >
					{isOpen && (
						<InfoWindow key={location.id} >
							<span>{location.id}</span>
						</InfoWindow>
					) }
				</Marker>
			)}
		</GoogleMap>
	)
}))

export default GoogleMaps;

