import HeadContent from "@/components/HeadContent";
import TextPage from "@/components/TextPage";
import Link from "@/components/textpage/InnerLink";

import styles from "@/styles/Art.module.css";

export default function ArtPage () {
	const art = [
		{
			name: 'Akatsuki',
			link: '/art/202304-1.webp',
			type: 'art',
			attr: ['Rashmi Dinkar Patil'],
			date: '2023-04-17T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 1094,
				width: 694,
			}
		},
		{
			name: 'Rimuru Tempest',
			link: '/art/202303-3.webp',
			type: 'art',
			attr: ['Gracy Debbarma'],
			date: '2023-03-16T15:00:00.000Z',
			hype: true,
			metadata: {
				height: 779,
				width: 801,
			}
		},
		{
			name: 'Ainz Ooal Gown',
			link: '/art/202303-2.webp',
			type: 'art',
			attr: ['Dibya Ranjan Samal'],
			date: '2023-03-12T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 635,
				width: 508,
			}
		},
		{
			name: 'No Game No Life',
			link: '/art/202303-1.webp',
			type: 'art',
			attr: ['Shreya Rajvanshi'],
			date: '2023-03-09T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 335,
				width: 455,
			}
		},
		{
			name: 'Ranma 1/2',
			link: '/art/0064.webp',
			type: 'art',
			attr: ['Purba Saren'],
			date: '2022-12-08T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 1080,
				width: 1080,
			}
		},
		{
			name: 'One Piece',
			link: '/art/0063.webp',
			type: 'art',
			attr: ['Maniteja Maloth'],
			date: '2022-11-14T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 809,
				width: 1080,
			}
		},
		{
			name: 'Jujutsu Kaisen',
			link: '/art/0062.webp',
			type: 'art',
			attr: ['Shreya Rajvanshi'],
			date: '2022-11-10T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 761,
				width: 1080,
			}
		},
		{
			name: 'Shoyo Hinata',
			link: '/art/0061.webp',
			type: 'art',
			attr: ['Abhinav Prakash'],
			date: '2022-08-18T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 1188,
				width: 1046,
			}
		},
		{
			name: 'Nana',
			link: '/art/0060.webp',
			type: 'art',
			attr: ['Shreya Rajvanshi'],
			date: '2022-08-11T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 1035,
				width: 1080,
			}
		},
		{
			name: 'Code Geass',
			link: '/art/0059.webp',
			type: 'art',
			attr: ['Maniteja Maloth'],
			date: '2022-08-04T13:00:00.000Z',
			hype: true,
			metadata: {
				height: 1350,
				width: 1080,
			}
		}
	];

	return (<>
		<HeadContent
			title="Art"
			description="View some amazing artwork created by our DNA team. From traditional to digital to even unconvential, we have it all."
		/>
		<TextPage>
			<p style={{ textAlign: "center" }}>
				Check out our content here or on <Link isRed href="https://www.instagram.com/maskiitkgp" target="_blank"> Instagram </Link>
			</p>
		</TextPage>
		<section id={styles['photos']}>
			{ art.map(({ name, link, attr, date }) => (<div className={styles["img-container"]} key={date}>
				<img src={link} alt={name} loading="lazy" className={styles["img"]} />
				<div className={styles["overlay"]}>
					<h1>{ name }</h1>
					<h3>{ attr.join(',') }</h3>
				</div>
			</div>)) }
		</section>
	</>);
}
