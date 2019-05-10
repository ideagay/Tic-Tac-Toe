import React from 'react';
import {Route, Link} from 'react-router-dom';

const routes = [
    {
        path: '/subRoutes/a',
        component: A
    },
    {
        path: '/subRoutes/b',
        component: B,
        routes: [
            {
                path: '/subRoutes/b/c',
                component: Bc
            },
            {
                path: '/subRoutes/b/d',
                component: Bd
            }
        ]
    }
]

function A(){
    return <h2>A</h2>;
}

function B({routes}){
    return (
        <div>
            <h2>B</h2>
            <ul>
                <li><Link to="/subRoutes/b/c">b-c</Link></li>
                <li><Link to="/subRoutes/b/d">d-d</Link></li>
            </ul>
            <div>
                {routes.map((route, i)=> (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </div>
    );
}

function Bc(props) {
    return (
        <h2>i am c, b's child</h2>
    )
}

function Bd(props) {
    return (
        <h2>i am d, b's child</h2>
    )
}

function SubRoutes(props) {
    return (
        <div>
            <ul>
                <li><Link to="/subRoutes/a">A</Link></li>
                <li><Link to="/subRoutes/b">B</Link></li>
            </ul>
            <div>
                {routes.map((route, i)=> (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </div>
    )
}

function RouteWithSubRoutes(route) {
    return (
        <Route path={route.path} render={props => (
            <route.component {...props} routes={route.routes}/>
        )}></Route>
    )
}

export default SubRoutes;