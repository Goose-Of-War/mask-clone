interface HamburgerLinkProps {
	label: string;
	link: string;
	isCurrent?: Boolean;
}

const HamburgerLink: React.FC<HamburgerLinkProps> = ({ label, link, isCurrent }) => {
	return (
		<a href={link} target="_self">
			<div className={ 'lettuce ' + (isCurrent ? 'active-page' : '') }>{ label }</div>
		</a>
	);
};

export default HamburgerLink;
