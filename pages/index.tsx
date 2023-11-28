import HeadContent from '@/components/HeadContent';

import styles from '@/styles/Home.module.css';

export default function Home() {
	const eventAlert = null;

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
				<div className={styles["notices"]}><div className={styles["noticebox"]}>
					<div className={styles["notices-header"]}>Updates!</div>
					<div className={styles["notices-list"]}>
						{/* Posts */}
					</div>
				</div></div>
				<div className={styles["about-stuff"]}>
					<h1>Welcome to the MASK website!</h1>
					<div className={'text ' + styles["text"]} style={{ fontSize: '1.1em' }}>
						Welcome to the official website of the Manga and Anime Society Kharagpur. We are a community that is dedicated to anime and related content. We aim to spread our passion and love for anime, manga, and related media. We create content ranging from AMVs and reels to artwork and sketches, and hold crowd events like anime quizzes. We wish to reach to the skies and beyond, as we aim to diversify and increase the scope of our interaction and indulgence in the coming years.
					</div>
				</div>
			</div>
		</>
	)
}
