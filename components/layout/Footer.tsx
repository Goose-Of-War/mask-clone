import React from 'react';
import { BiLogoFacebookSquare, BiLogoGmail, BiLogoGithub, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'

import SocialMediaIcon from './SocialMediaIcon';

const Footer = () => {
	const footerLinks = [
		{ name: 'YouTube', href: 'https://www.youtube.com/@maskiitkgp', icon: BiLogoYoutube },
		{ name: 'Instagram', href: 'https://www.instagram.com/maskiitkgp', icon: BiLogoInstagram },
		{ name: 'Facebook', href: 'https://www.facebook.com/maskiitkgp', icon: BiLogoFacebookSquare },
		{ name: 'Gmail', href: 'mailto:kgpmask@gmail.com', icon: BiLogoGmail },
		{ name: 'GitHub', href: 'https://github.com/kgpmask/MASK', icon: BiLogoGithub }
	];
	

	return (<footer>
		<a id="footer-logo" href="/"><img src="/logo.jpeg" alt="MASK"/></a>
		<a href="/" id="footer-name"><p>Manga and Anime<br/>Society Kharagpur</p></a>
		<div id="contact-us"><span className="float-middle">Find us!</span></div>
		{ footerLinks.map(({ name, href, icon }) => (
			<SocialMediaIcon title={ name } link={ href } Icon={ icon } key={ href } />
		)) }
		</footer>);
};

export default Footer;
