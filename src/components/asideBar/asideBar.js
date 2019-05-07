import React from 'react';

//Import components
import ListCategories from '../listCategories/listCategories';
import Search from '../search/search';

const AsideBar = ({findCategories, categoryName, categories}) => {
	return (
		<aside className="aside-bar">
			<ListCategories 
				findCategories={findCategories}
				categoryName={categoryName}
				categories={categories} />
			<Search />
		</aside>
	);
}

export default AsideBar;