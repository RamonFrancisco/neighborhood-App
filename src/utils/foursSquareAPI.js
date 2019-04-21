const BASE_URL = 'https://api.foursquare.com/v2/venues/explore?';
const CLIENT_ID = 'client_id=5UE2KDLDBQQ0QQWAT22RM3F0C22EJNP55V3NF3DSIKBZ3OQG';
const CLIENT_SECRET = 'client_secret=YEBNLCAZIGNBTTL5DC0NUJHCUGW1ZOAMEP5KSZCM3X0P3IXS'
const DEFAULT_PARAMETERS = 'v=20180323'
const NEAR = '&near=São Paulo';

export const getVenue = id => 
fetch(`${BASE_URL}categoryId=${id}&${CLIENT_ID}&${CLIENT_SECRET}&${DEFAULT_PARAMETERS}&${NEAR}`)
	.then(res => res.json())
	.then(data => data.response.groups[0])
	.catch(err => console.error(err))

// export const search = (query) => 
// fetch(`${BASE_URL}/categories?${CLIENT_ID}&${CLIENT_SECRET}&${DEFAULT_PARAMETERS}`)
// 	.then(res => res.json())
// 	.then(data => console.log('ids', data.response))