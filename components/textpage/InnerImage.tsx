import Image from 'next/image';

import styles from '@/styles/TextPage.module.css';

interface InnerImageProps {
	src: string;
	alt?: string;
	containerStyle?: Object;
	imageStyle?: Object;
	caption?: string;
	blackBG?: Boolean;
}

const InnerImage: React.FC<InnerImageProps> = ({src, alt, caption, containerStyle, imageStyle, blackBG}) => {
	return (<div className={styles['image-container']} style={{
			backgroundColor: blackBG && 'black',
			...containerStyle
		}}>
		<Image src={src} alt={alt || ''} style={imageStyle} width={1000} height={1000}/>
		{ caption && <p>{ caption }</p> }
	</div>)
};

export default InnerImage;
