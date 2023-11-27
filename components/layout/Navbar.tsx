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
					<li><a href="/" style={{ padding: '0px 16px' , verticalAlign : 'middle' }} className='nohover' target="_self">
						<img src="logo.jpeg" alt="Logo" width="100%" height="100%" id="navbar-logo"/>
					</a></li>
					<span className="navbar-line">&nbsp;</span>
					<div className="navbar-container">
						{ navLinks.map(({ name, href }) => (
							<li><NavbarItem label={ name } link={ href } isCurrent={ currentPage === href.slice(1,) } key={ href }/></li>
						)) }
					</div>
					<div id="dropdown">
						<a href="/about" className="dropbtn" target="_self">About</a>
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
