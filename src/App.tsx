import { lazy, Suspense } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner'
const Home = lazy(() => import('./pages/Home/Home'))

const App = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Suspense fallback={<LoaderSpinner />}>
					<Home />
				</Suspense>
			</main>
			<Footer />
		</>
	)
}

export default App