import Link from "next/link";
import Image from "next/image";

import NavbarItem from "./NavbarItem";

interface NavbarProps {
	currentPage?: String;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
	const navLinks = [
		{ name: 'Art', href: '/art' },
		{ name: 'Videos', href: '/videos' },
		{ name: 'Events', href: '/events' },
		{ name: 'Newsletters', href: '/newsletters' }
	];

	const dropdownLinks = [
		{ name: 'Our Society', href: '/about' },
		{ name: 'Our Members', href: '/members' }
	];

	return (
		<nav>
			<div className='navbar-full'>
				<ul>
					<li><Link href="/" style={{ padding: '0px 16px' , verticalAlign : 'middle' }} className='nohover' target="_self">
						<Image src="/logo.jpeg" alt="Logo" width={40} height={40} id="navbar-logo"/>
					</Link></li>
					<span className="navbar-line">&nbsp;</span>
					<div className="navbar-container">
						{ navLinks.map(({ name, href }) => (
							<li key={ href.slice(1,) }><NavbarItem label={ name } link={ href } isCurrent={ currentPage === href.slice(1,) }/></li>
						)) }
					</div>
					<div id="dropdown">
						<Link href="/about" className="dropbtn" target="_self">About</Link>
						<div className="dropdown-content">
							{ dropdownLinks.map(({ name, href }) => (
								<NavbarItem label={ name } link={ href } isCurrent={ currentPage === href.slice(1,) } key={ href }/>
							)) }
						</div>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
