import Categories from '../components/Categories/Categories.js'
import OfferDay from '../components/Day/OfferDay.js';
import Special from '../components/Special/Special.js';
import Rift from '../components/Rifts/Rift.js';
import Advantages from '../components/Advantages/Advantages.js';
import Rose from '../components/Rose/Rose.js';
import Comment from '../components/Comment/Comment.js';
import HeaderFooter from '../components/Header/HeaderFooter.js';
import HowWork from '../components/HowWork.js';

export default function Main() {
	return <>
	    <HeaderFooter />
		<Categories />
		<Special />
		<OfferDay />
		<Rose />
		<Rift />
		<Advantages />
		<Comment />
		<HowWork/>
	</>;
}