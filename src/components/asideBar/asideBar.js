import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Import components
import ListCategories from '../listCategories/listCategories';
import Search from '../search/search';

const AsideBar = ({findCategories, categoryName, filterLocations, categories, allLocation, filteredLocation, markerActive, closeMenu, openInfoWindow}) => {
	return (
		<aside className="aside-bar">
			<FontAwesomeIcon onClick={closeMenu} className="header__icon" icon="times" />
			<Search 
				openInfoWindow={openInfoWindow}
				markerActive={markerActive}
				allLocation={allLocation}
				filteredLocation={filteredLocation} 
				filterLocations={filterLocations} />
			<ListCategories 
				findCategories={findCategories}
				categoryName={categoryName}
				categories={categories} />
		</aside>
	);
}

export default AsideBar;