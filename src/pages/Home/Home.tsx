import Hero from '../../components/Hero/Hero'
import Catalog from '../../components/Catalog/Catalog'
import SectionAbout from '../../components/SectionAbout/SectionAbout'
import Quiz from '../../components/Quiz/Quiz'
import Team from '../../components/Team/Team'
import Faq from '../../components/Faq/Faq'
import Contacts from '../../components/Contacts/Contacts'
import Instgrm from '../../components/Instgrm/Instgrm'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import CartMini from '../../components/Cart/CartMini'

const Home = () => {
	return (
		<>
			<Hero />
			<Catalog />
			<SectionAbout />
			<Quiz />
			<Team />
			<Faq />
			<Contacts />
			<Instgrm />

		</>
	)
}

export default Home