import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import LoaderSpinner from './LoaderSpinner/LoaderSpinner'

const Layout = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Suspense fallback={<LoaderSpinner />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	)
}

export default Layout