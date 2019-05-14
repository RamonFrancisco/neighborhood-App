import React from 'react';

//Import components
import ListCategories from '../listCategories/listCategories';
import Search from '../search/search';

const AsideBar = ({findCategories, categoryName, filterLocations, categories, allLocation, filteredLocation}) => {
	return (
		<aside className="aside-bar">
			<Search allLocation={allLocation}
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