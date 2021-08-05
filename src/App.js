import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home/Home';
const App = () => {
    return (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    </Router>
    );

}