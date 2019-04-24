const BASE_URL = 'https://api.foursquare.com/v2/venues/explore?';
const CLIENT_ID = `client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}`;
const CLIENT_SECRET = `client_secret=${process.env.REACT_APP_FOURSQUARE_SECRET_ID}`
const DEFAULT_PARAMETERS = 'v=20180323'
const NEAR = '&near=São Paulo';

console.log('client-id', CLIENT_ID)
console.log('secret-id', CLIENT_SECRET)

export const getVenue = id => 
fetch(`${BASE_URL}categoryId=${id}&${CLIENT_ID}&${CLIENT_SECRET}&${DEFAULT_PARAMETERS}&${NEAR}`)
	.then(res => res.json())
	.then(data => data.response.groups[0])
	.catch(err => console.error(err))

// export const search = (query) => 
// fetch(`${BASE_URL}/categories?${CLIENT_ID}&${CLIENT_SECRET}&${DEFAULT_PARAMETERS}`)
// 	.then(res => res.json())
// 	.then(data => console.log('ids', data.response))