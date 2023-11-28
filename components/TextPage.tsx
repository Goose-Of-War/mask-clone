interface TextPageProps {
	title?: string;
	children: React.ReactNode;
	hotStuff?: Boolean;
}

const TextPage: React.FC<TextPageProps> = ({title, children, hotStuff}) => {
	return (<>
		{ title && <h1 style={{ color: hotStuff ? 'var(--error-red)' : '' }}>{ title }</h1> }
		<div className="text">
			{ children }
		</div>
	</>);
};

export default TextPage;
