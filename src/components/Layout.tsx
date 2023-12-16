import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Suspense fallback={<div>loading.......</div>}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	)
}

export default Layout