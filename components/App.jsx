
'use strict';

const React = require('react');
let { Link, RouteHandler } = require('react-router');

const App = React.createClass({
    render () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </header>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;