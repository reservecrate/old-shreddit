import './styles/index.css';
import { Header } from './Header';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { MainContent } from './MainContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About';
import { Error } from './Error';
import { Navbar } from './Navbar';

export const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <Banner />
                    <MainContent />
                    <Footer />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
};
