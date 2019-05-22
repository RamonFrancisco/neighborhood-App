import React from 'react';

const ListCategories = ({findCategories, categoryName, categories}) => {

	return(
		<div className="list-categories">
			<h2 className="list-categories__title">Categorias</h2>
			<div className="list-categories__list">
				{categories.map(categorie => {
					if(categorie.name === categoryName ) {
						return	<button className='list-categories__list__option --click' key={categorie.id} > {categorie.name} </button>
					}
					return	<button className='list-categories__list__option' 
						onClick={ () => {findCategories(categorie.id, categorie.name)}} key={categorie.id} >{categorie.name}</button>
				})}
			</div>
		</div>
	);
}

export default ListCategories;