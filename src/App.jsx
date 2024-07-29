import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import './assets/sass/main.scss';

export default function App(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path ='/' element={<Nav />}>
					<Route index element = {<Home />} />
					<Route path ='about' element = {<About />} />
					<Route path = 'contact' element = {<Contact />} />
					<Route path = '*' element = {<NoPage />} /> 
				</Route>
			</Routes>
		</BrowserRouter>
	)
}