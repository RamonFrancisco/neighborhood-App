import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

import markerDefault from '../../images/marker-default.png';
import markerActive from '../../images/marker-active.png';

const GoogleMaps = withScriptjs(withGoogleMap((props) => {

	const [showInfoIndex, setShowInfoIndex] = useState(false);

	const validationAddress = (address) => address ? address : 'Não informado'
	 
	return (

		<GoogleMap
			aria-label="Map"
			defaultZoom={11}
			defaultCenter={props.defaultPosition}>
			{props.allLocation.map(location => 
				<Marker 
					icon={props.markerActive === location.venue.id ? markerActive : markerDefault }
					key={location.venue.id}
					position={{ lat: location.venue.location.lat, lng: location.venue.location.lng }}
					onClick={ e => props.openInfoWindow(location.venue.id)}> 
				{props.markerActive === location.venue.id && props.isOpen && 
					<InfoWindow key={location.venue.id}>
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
				}
				
				</Marker>
			)}
		</GoogleMap>
	)
}))

export default GoogleMaps;

