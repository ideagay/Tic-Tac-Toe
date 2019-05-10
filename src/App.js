import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import TicTacToe from './components/TicTacToe/Board';
import ColorChange from './components/ColorChange/Main';
import SubRoutes from './components/SubRoutes/Main';
import Search from './components/Search/Main';
import './App.css';

function Index() {
    return <h2>hello world!</h2>;
}

// function TicTacToe() {
//     return <TicTacToe />;
// }

function Topic({match}) {
    return <h3>Topic: {match.params.id}</h3>
}

function Topics({match}) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/a`}>a</Link>
                </li>
                <li>
                    <Link to={`${match.url}/b`}>b</Link>
                </li>
            </ul>
            <Route path={`${match.path}/:id`} component={Topic}></Route>
            <Route exact path={match.path} render={() => <h3>Please select a topic</h3>}></Route>
        </div>
    )
}

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ticTacToe">TicTacToe</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/colorChange">ColorChange</Link>
                </li>
                <li>
                    <Link to="/subRoutes">SubRoutes</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </nav>
    );
}

function AppRouter() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact component={Index} />
                <Route path="/ticTacToe" component={TicTacToe} />
                <Route path="/topics" component={Topics} />
                <Route path="/colorChange" component={ColorChange} />
                <Route path="/subRoutes" component={SubRoutes} />
                <Route path="/search" component={Search} />
            </div>
        </Router>
    );
}

export default AppRouter;
