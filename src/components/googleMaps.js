import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const GoogleMaps = withScriptjs(withGoogleMap((props) => {

	const [showInfoIndex, setShowInfoIndex] = useState(false)

	const validationAddress = (address) => address ? address : 'Não informado'

	const showInfoWindow = ( id, index ) => {
		props.sourcePhoto(id)
		setShowInfoIndex(index)
	}

	return (

		<GoogleMap
			defaultZoom={11}
			defaultCenter={{ lat: -23.533773, lng: -46.625290 }}>
			{props.allLocation.map((location, index) =>
				<Marker 
					key={location.id}
					position={{ lat: location.location.lat, lng: location.location.lng }}
					onClick={ e => showInfoWindow( location.id, index ) } >
					{ ( showInfoIndex === index ) && ( 
						<InfoWindow key={location.id} >
							<div className="infoWindow">
								<h2 className="infoWindow__title">{location.name}</h2>

								<img src="../images/no-image.jpg" alt={location.name} />
								{/* {(props.photo !== {}) ? props.photo : } */}

								<div className="infoWindow__address">
									<p>Rua: {validationAddress(location.location.address)}</p>
									<p>Bairro: {validationAddress(location.location.neighborhood)}</p>
									<p>Cidade: {validationAddress(location.location.city)}</p>
									<p>Estado: {validationAddress(location.location.state)}</p>
									<p>Pais: {validationAddress(location.location.country)}</p>
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

