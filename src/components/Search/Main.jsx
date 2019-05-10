import React from 'react';
import { Route, Link } from 'react-router-dom';

function Search({location}) {
    let params = new URLSearchParams(location.search);
    return (
        <div>
            <ul>
                <li><Link to={{pathname: '/search/user', search: '?name=hyb'}}>hyb</Link></li>
                <li><Link to={{pathname: '/search/user', search: '?name=pj'}}>pj</Link></li>
            </ul>
            <Route render={() => (
                <h3>
                my name is {params.get('name')}!
                </h3>
            )}></Route>
        </div>
    )
}

export default Search;