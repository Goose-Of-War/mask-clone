import Link from "next/link";

interface HamburgerLinkProps {
	label: string;
	link: string;
	isCurrent?: Boolean;
}

const HamburgerLink: React.FC<HamburgerLinkProps> = ({ label, link, isCurrent }) => {
	return (
		<Link href={link} target="_self">
			<div className={ 'lettuce ' + (isCurrent ? 'active-page' : '') }>{ label }</div>
		</Link>
	);
};

export default HamburgerLink;
