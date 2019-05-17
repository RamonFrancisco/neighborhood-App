import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const GoogleMaps = withScriptjs(withGoogleMap((props) => {

	const [showInfoIndex, setShowInfoIndex] = useState(false);

	const validationAddress = (address) => address ? address : 'Não informado'

	const showInfoWindow = ( id, index ) => {
		// props.sourcePhoto(id)
		setShowInfoIndex(index)
	}
	 
	return (

		<GoogleMap
			defaultZoom={11}
			defaultCenter={props.defaultPosition}>
			{props.allLocation.map((location, index) => 
				<Marker 
					key={location.venue.id}
					position={{ lat: location.venue.location.lat, lng: location.venue.location.lng }}
					onClick={ e => showInfoWindow( location.venue.id, index ) } >
					{ ( showInfoIndex === index ) && ( 
						<InfoWindow key={location.venue.id} >
							<div className="infoWindow">
								<h2 className="infoWindow__title">{location.venue.name}</h2>

								<div className="infoWindow__address">
									<p><strong>Rua:</strong> {validationAddress(location.venue.location.address)}</p>
									<p><strong>Bairro:</strong> {validationAddress(location.venue.location.neighborhood)}</p>
									<p><strong>Cidade:</strong> {validationAddress(location.venue.location.city)}</p>
									<p><strong>Estado:</strong> {validationAddress(location.venue.location.state)}</p>
									<p><strong>Pais:</strong> {validationAddress(location.venue.location.country)}</p>
								</div>
							</div>
							

						</InfoWindow>
					) }
				</Marker>
			)}
		</GoogleMap>
	)
}))

export default GoogleMaps;

