import EventContainer from "@/components/EventContainer";
import HeadContent from "@/components/HeadContent";

export default function Events () {
	return (<>
		<HeadContent title="Events" />
		<h1> Events </h1>
		<EventContainer
			heading="One Piece: Gear 5 Screening"
			date="August 13, 2023"
			venue="Netaji Auditorium, Main Building"
			author="Nishkal Prakash"
			desc={<>
				<b>Ore wa Monkey D. Luffy! Kaizokuō ni naru otoko da!!</b>
				<br/> With the hype of Luffy's latest transformation (Gear 5) breaking the internet and causing fans all over to go crazy over it, how could we not screen it in our institute? This article covers the story of how the screening went.
			</>}
			img="/events/gear-5-screening.jpg"
			link="/events/gear-5-screening"
			style={{ flexDirection: 'row-reverse' }}
		/>
		<EventContainer
			heading="Suzume No Tojimari Trip"
			date="April 30, 2023"
			venue="South City Mall, Kolkata"
			author="Son Goku"
			desc={<>
				How far would you go to watch a movie with the gang? Answer: At least Kolkata.<br />
					To watch the new Makoto Shinkai movie, Suzume no Tojimari, we went to South City Mall. From toto races, early Sunday morning trains, bus rides full of jokes, and a wonderful cinematic experience, this trip was our last big thing for this semester.
			</>}
			img="/events/suzume.jpg"
			link="/events/suzume"
		/>
	</>);
}
