import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({title, activeMenu}) => {

	return (
		<header className="header">
			<FontAwesomeIcon onClick={activeMenu} className="header__icon" icon="bars" />
			<h1 className="header__title">{title}</h1>
		</header>
	)
};

export default Header;