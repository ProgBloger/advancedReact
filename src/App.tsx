import { Route, Routes } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync />} />
                <Route path={'/'} element={<MainPageAsync />} />
            </Routes>
        </div>
    )
}

export default App