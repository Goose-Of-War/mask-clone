import HeadContent from '@/components/HeadContent';
import Updates from '@/components/homepage/Updates';

import styles from '@/styles/Home.module.css';

export default function Home() {
	const eventAlert = null;
	const recentPosts = [
		{ link: 'https://youtu.be/VxVDJhMU6Zc', name: '[AMV] YLIA x Horimiya', type: 'youtube', hype: true, date: new Date() },
		{ link: 'https://youtu.be/lzvrb4ePxdU', name: '[AMV] Mob Psycho 100', type: 'youtube', hype: true, date: new Date() },
		{ link: '/events/one-piece-screening', name: 'One Piece Screening', type: 'event', hype: true },
		{ link: '/newsletters/2023-05-1', name: 'May Newsletter', type: 'newsletter', hype: true },
		{ link: 'https://youtu.be/P0NxHvWz1ns', name: '[AMV] Cosplay Event Coverage', type: 'youtube', hype: true },
		{ link: 'https://youtu.be/w_tkq4syNnI', name: '[AMV] Mushoku Tensei', type: 'youtube', hype: true },
		{ link: 'https://www.instagram.com/reel/CsgS9zQIpdN', name: '[Reel] Oshi No Ko', type: 'instagram', hype: true }
	];

	return (
		<>
			<HeadContent />
			<div className={styles["mask-banner"]}>
				<img className={styles["mask-banner-image"]} src="/transparent_logo.png" alt="MASK"/>
				<span className={styles["mask-banner-text-container"]}><span className={styles["mask-banner-text"]}>Manga and Anime Society Kharagpur</span></span>
				<span className={styles["mask-banner-edge"]}>&nbsp;</span>
			</div>
			{ eventAlert && (<div className={styles["event-alert"]} style={{ margin: "50px 0px" }}>
				{ eventAlert }
			</div>) }
			<div className={styles["flex-container"]}>
				<Updates updates={recentPosts} />
				<div className={styles["about-stuff"]}>
					<h1>Welcome to the MASK website!</h1>
					<div className={'text ' + styles["text"]} style={{ fontSize: '1.1em' }}>
						Welcome to the official website of the Manga and Anime Society Kharagpur. We are a community that is dedicated to anime and related content. We aim to spread our passion and love for anime, manga, and related media. We create content ranging from AMVs and reels to artwork and sketches, and hold crowd events like anime quizzes. We wish to reach to the skies and beyond, as we aim to diversify and increase the scope of our interaction and indulgence in the coming years.
					</div>
				</div>
			</div>
			<hr className={styles['flex-break']}/>
			<div className={styles['flex-container']} id={styles['bottom-container']}>
				<div className={styles['top-container']}>
					{/* Art */}
				<div className={styles["submit-stuff"]}><a href="/submissions"><button className={styles["submit-button"]}>Submit your content!</button></a></div>
				</div>
				{/* Videos */}
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<a className="faded" style={{ marginRight: "20px" }} href="/privacy">Privacy Policy</a>
				<a className="faded" style={{ marginLeft: "20px" }} href="/terms">Terms of Use</a>
			</div>
		</>
	)
}
