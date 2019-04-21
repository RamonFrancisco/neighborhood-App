import React from 'react';

const ListCategories = ({findCategories, categoryName}) => {
	
	const categories = [
		{id: '4d4b7105d754a06374d81259', name: 'alimentacao', label: 'Alimentação'},
		{id: '4bf58dd8d48988d188941735', name: 'estadio', label: 'Estádio'},
		{id: '4bf58dd8d48988d163941735', name: 'parque', label: 'Parque'},
	]

	return(
		<aside className="list-categories">
			<h2 className="list-categories__title">Categorias</h2>
			<div className="list-categories__list">
				{categories.map(categorie => {
					if(categorie.name === categoryName ) {
						return	<button className='list-categories__list__option --click' key={categorie.id} > {categorie.label} </button>
					}
					return	<button className='list-categories__list__option' onClick={ () => {findCategories(categorie.id, categorie.name)}} key={categorie.id} > {categorie.label} </button>
				})}
			</div>
		</aside>
	);
}

export default ListCategories;