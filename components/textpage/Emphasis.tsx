interface EmphasisProps {
	isRed?: Boolean;
	children: React.ReactNode;
}

const Emphasis: React.FC<EmphasisProps> = ({ isRed, children }) => {
	
	return (<>
		<p style={{
			color: (isRed ? 'var(--red)' : ''),
			textAlign: 'center',
			fontSize: '118%',
			fontStyle: 'italic'
		}}>
			{ children }
		</p>
		<br />
	</>);
};

export default Emphasis;
