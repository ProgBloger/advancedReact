import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage/index';
import { MainPage } from 'pages/MainPage/index';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib/classNames';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Routes>
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default App