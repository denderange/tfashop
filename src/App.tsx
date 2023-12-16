import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home/Home'))
// const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'))
// const NewCars = lazy(() => import('./pages/NewCars/NewCars'))

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>

				<Route index element={<Home />} />
				{/* <Route path='contacts' element={<ContactUs />} /> */}
				{/* <Route path='newcars' element={<NewCars />} /> */}
			</Route>
		</Routes>
	)
}

export default App