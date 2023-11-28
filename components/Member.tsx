import { IconType } from "react-icons";

import styles from '@/styles/Members.module.css';

interface Team {
	Icon: IconType;
	title: string;
	color?: string;
}

interface MemberProps {
	name: string;
	image: string;
	teams?: Team[]
}

const Member: React.FC<MemberProps> = ({ name, image, teams }) => {
	return (<div className={styles['member']}>
		<img src={image} alt={name} loading="lazy" />
		<div className={styles['div-line']}> &nbsp; </div>
		<div className={styles['member-desc']}>{ name }</div>
		<div className={styles["teamlist"]}>
			{teams?.map(({color, title, Icon}) => (<Icon size={20} title={title} color={color} key={title} />))}
		</div>
	</div>)
};

export default Member;
