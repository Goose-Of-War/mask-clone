import styles from '@/styles/EventContainer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import InnerLink from './textpage/InnerLink';

interface EventContainerProps {
	heading: string;
	date: string;
	venue: string;
	author: string;
	img: string;
	desc: string | React.ReactNode;
	link: string;
	style?: Object;
}

const EventContainer: React.FC<EventContainerProps> = ({ heading, date, venue, author, img, desc, link, style }) => {
	return (<div className={styles['event-container']} style={style}>
		<Link href={link} title={heading}>
			<div className={styles['image-container']}>
				<Image src={img} alt={heading} width={1000} height={800} />
			</div>
		</Link>
		
		<div className={styles['details']}>
			<h2><Link href={link} title={heading}>{ heading }</Link></h2>
			<br />
			<p>
				<span>Date: </span>{ date }<br />
				<span>Venue: </span>{ venue }<br />
				<span>Author: </span>{ author }<br />
			</p>
			<br />
			<p>{desc}</p>
			<br />
			<InnerLink isRed href={link} title={heading}> Read More... </InnerLink>
		</div>
	</div>);
};

export default EventContainer;
