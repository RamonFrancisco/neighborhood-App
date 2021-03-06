const BASE_URL = 'https://api.foursquare.com/v2/venues/explore?';
const CLIENT_ID = `client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}`;
const CLIENT_SECRET = `client_secret=${process.env.REACT_APP_FOURSQUARE_SECRET_ID}`
const DEFAULT_PARAMETERS = 'v=20180323'
const NEAR = '&near=São Paulo';

//Get avenue for id 
export const getVenue = id =>
	fetch(`${BASE_URL}categoryId=${id}&${CLIENT_ID}&${CLIENT_SECRET}&${DEFAULT_PARAMETERS}&${NEAR}`)
		.then(res => res.json())
		.then(data => data.response.groups[0])
		.catch(err => console.error(err))

//Get categories 
export const getCategories = () =>
	fetch(`https://api.foursquare.com/v2/venues/categories?${CLIENT_ID}&${CLIENT_SECRET}&${DEFAULT_PARAMETERS}&${NEAR}`)
		.then(res => res.json())
		.then(data => data.response)
		.catch(err => console.error(err))