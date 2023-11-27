import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import HamburgerLink from './HamburgerLink';

interface HamburgerMenuProps {
	currentPage?: String;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ currentPage }) => {
	const [visible, setVisible] = React.useState(false);

	const onClick = () => {
		setVisible(!visible);
		document.querySelector('.hamburger-menu')?.classList.toggle('slide');
	}

	const topLinks = [
		{ name: 'Art', href: '/art' },
		{ name: 'Videos', href: '/videos' },
		{ name: 'Events', href: '/events' },
		{ name: 'Newsletters', href: '/newsletters' }
	];

	const bottomLinks = [
		{ name: 'Our Society', href: '/about' },
		{ name: 'Our Members', href: '/members' }
	];

	return (<>
		<div className="plate">
			<a href="/"><div className="burger-home">
				<img src="/logo.jpeg" id="burger-logo" alt="Logo"/>
			</div></a>
			<div className="burger" onClick={ onClick }>
				{
					visible ? <IoClose size={ 40 } /> : < GiHamburgerMenu size={ 40 } />
				}
			</div>
		</div>
		<hr className="plate-bar"/>
		<div className="hamburger-menu">
			<div style={{ height: 80 }}></div>
			<hr id="top-line"/>
			<div className='link-flex-container'>
				<div>
					{ topLinks.map(({ name, href }) => (
						<HamburgerLink label={ name } link={ href } isCurrent={ currentPage === href.slice(1,) } />
					)) }
				</div>
				<div>
					{ bottomLinks.map(({ name, href }) => (
						<HamburgerLink label={ name } link={ href } isCurrent={ currentPage === href.slice(1,) } />
					)) }
				</div>
			</div>
			<hr className="border-bottom"/>
		</div>
	</>);
}

export default HamburgerMenu;
