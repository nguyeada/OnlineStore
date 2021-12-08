import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
    return (
        <nav className="App-Nav">
            <Link to="/shoppinglist">Shop Online</Link> <br></br>
            <Link to="/storelist">See list of Beaver Mart Stores</Link><br></br>
            <Link to="/"exact>HomePage</Link>
        </nav>
    );
}

export default Navigation;