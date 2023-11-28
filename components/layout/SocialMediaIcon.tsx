import { IconType } from 'react-icons';

interface SocialMediaIconProps {
	title?: string;
	link: string;
	Icon: IconType;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ link, title, Icon }) => {
	return (<a href={ link } target='_blank' title={ title } className='social-link'>
		<Icon size={ 36 } />
	</a>);
};

export default SocialMediaIcon;
