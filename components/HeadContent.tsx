import Head from "next/head";

interface HeadContentProps {
	title?: string;
	description?: string;
	keywords?: string[];
	jsLinks?: string[];
}

const HeadContent: React.FC<HeadContentProps> = ({ title, description, keywords, jsLinks }) => {
	const metaKeywords = ['Manga', 'Anime', 'Society', 'MASK', 'IIT KGP', 'Kharagpur', 'Otakus',
		...(keywords || [])
	]
	return (<Head>
		<title>{ title || 'MASK' }</title>
		<meta name="description" content={ description || 'The MASK Website' } />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="keywords" content={ metaKeywords.join(', ') } />
		<link rel="icon" href="/favicon.ico" />
		{ jsLinks && jsLinks.map(link => (<script src={ link } />)) }
	</Head>)
};

export default HeadContent
