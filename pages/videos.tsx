import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import HeadContent from "@/components/HeadContent";
import TextPage from "@/components/TextPage";
import Link from "@/components/textpage/Link";

import styles from '@/styles/Videos.module.css';

export default function VideosPage () {
	const videos = [
		{ id: 'VxVDJhMU6Zc', name: '[AMV] YLIA x Horimiya' },
		{ id: 'lzvrb4ePxdU', name: '[AMV] Mob Psycho 100' },
		{ id: 'P0NxHvWz1ns', name: '[AMV] Cosplay Event Coverage' },
		{ id: 'w_tkq4syNnI', name: '[AMV] Mushoku Tensei' }
	];

	return (<>
		<HeadContent
			title="Videos"
			description="Experience the thrill of captivating AMVs created by our talented team at Manga and Anime Society Kharagpur [MASK]. Immerse yourself in a world of dynamic video editing, mesmerizing soundtracks, and breathtaking visuals."
		/>
		<TextPage>
			<p style={{ textAlign: "center"}}>Check out our video content here or on <Link isRed href="https://www.youtube.com/@maskiitkgp">YouTube</Link></p>
		</TextPage>
		<div className={styles['youtube-videos']}>
			{ videos.map(({ id, name }) => (<LiteYouTubeEmbed
				id={id}
				title={name}
				wrapperClass={styles['youtube-vid'] + ' yt-lite'}
				containerElement='div'
				// aspectHeight={315}
				// aspectWidth={565}
			/>)) }
		</div>
	</>);
}
