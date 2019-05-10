import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './main.less';

function ColorChange({match, location}) {
    return (
        <div className="cc">
            <Header match={match}/>
            <div className="content">
                <TransitionGroup>
                    <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                        <Switch location={location}>
                            <Route exact path={`${match.url}/hsl/:h/:s/:l`} component={HSL}></Route>
                            <Route exact path={`${match.url}/rgb/:r/:g/:b`} component={RGB}></Route>
                            <Route render={() => <div>not found</div>}></Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
}

function Header({match}) {
    return (
        <ul className="nav">
            <NavLink to={`${match.path}/hsl/10/90/50`}>Red</NavLink>
            <NavLink to={`${match.path}/hsl/120/100/40`}>Green</NavLink>
            <NavLink to={`${match.path}/rgb/33/150/243`}>Blue</NavLink>
            <NavLink to={`${match.path}/rgb/240/98/146`}>Pink</NavLink>
        </ul>
    )
}

function HSL({match: {params}}) {
    return (
        <div className="color-area" style={{backgroundColor: `hsl(${params.h}, ${params.s}%, ${params.l}%)`}}>
            hsl({params.h}, {params.s}, {params.l})
        </div>
    )
}

function RGB({match: {params}}) {
    return (
        <div className="color-area" style={{backgroundColor: `rgb(${params.r}, ${params.g}, ${params.b})`}}>
            rgb({params.r}, {params.g}, {params.b})
        </div>
    )
}


export default ColorChange;