interface NavbarItemProps {
	label: string;
	link: string;
	isCurrent?: Boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, link, isCurrent }) => {
	return (
			<a href={link} className={ isCurrent ? 'active-page' : '' }>{ label }</a>
	);
};

export default NavbarItem;
