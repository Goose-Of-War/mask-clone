interface LinkProps {
	isRed?: Boolean;
	href: string;
	children: React.ReactNode;
	target?: string;
	title?: string;
	rel?: string
}

const Link: React.FC<LinkProps> = ({isRed, href, children, target, title, rel}) => {
	return (
		<a href={ href } style={{ color: (isRed ? 'var(--red)' : '') }} target={ target || '_self' } title={ title } rel={ rel } >
			{ children }
		</a>
	);
};

export default Link;
