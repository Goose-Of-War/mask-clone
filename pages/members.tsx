import { GiChecklist, GiLaptop, GiPaintBrush, GiPencil, GiTv } from 'react-icons/gi';

import HeadContent from '@/components/HeadContent';

import styles from '@/styles/Members.module.css';
import Member from '@/components/Member';

export default function MembersPage () {
	const records = {
		'Team Heads': [{
			name: "Parth Mane",
			image: "/members/19_parth.webp",
			teams: [
				{ title: "AMV & Music", Icon: GiTv },
				{ title: "Media & Newsletter", Icon: GiPencil },
				{ title: "Quiz", Icon: GiChecklist },
				{ title: "WebDev", Icon: GiLaptop, color: 'yellow' }
			],
		}],
		'Team Sub-Heads': [{
			name: "Vidunram A R",
			image: "/members/21_vidunram.webp",
			teams: [
				{ title: "Media & Newsletter", Icon: GiPencil },
				{ title: "Quiz", Icon: GiChecklist },
				{ title: "WebDev", Icon: GiLaptop, color: 'green' }
			],
			color: 'green'
		}],
		'Developers': [{
			name: "Ankan Saha",
			image: "/members/22_ankan.webp",
			teams: [
				{ title: "Quiz", Icon: GiChecklist },
				{ title: "Web Development", Icon: GiLaptop }
			]
		},
		{
			name: "Jai Sachdev",
			image: "/members/22_jai.webp",
			teams: [
				{ title: "Web Development", Icon: GiLaptop }
			]
		},
		{
			name: "Sahil Patel",
			image: "/members/22_sahil.webp",
			teams: [
				{ title: "Design & Arts", Icon: GiPaintBrush },
				{ title: "Web Development", Icon: GiLaptop }
			]
		},
		{
			name: "Soumil Maiti",
			image: "/members/22_soumil.webp",
			teams: [
				{ title: "Quiz", Icon: GiChecklist },
				{ title: "Web Development", Icon: GiLaptop }
			]
		}]
	};

	return (<>
		<HeadContent
			title='Our Members'
		/>
		<h1> Our Members </h1>
		{ Object.entries(records).map(([position, members]) => (Boolean(members.length) &&
			<div className={styles['status']}>
				<h2><u>{ position }</u></h2>
				<div className={styles['yearbox']}>
					<div className={styles['list']}>
						{ members.map(({ name, image, teams }) => (<Member
							name={name}
							image={image}
							teams={teams}
						/>)) }
					</div>
				</div>
			</div>
		)) }
	</>);
}
