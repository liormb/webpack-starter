/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 2:14 PM
 */

'use strict';

const React = require('react');
const Router = require('react-router');
const App = require('./components/App.jsx');
const Home = require('./components/Home.jsx');
const About = require('./components/About.jsx');
let { DefaultRoute, Route, Routes } = Router;

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="about" handler={About} />
        <DefaultRoute name="home" handler={Home} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler />, document.body);
});