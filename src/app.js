// app.js

import React from 'react';
import ReactDOM from 'react-dom';
//import styles from './app.css';
// require("./app.css")
import './app.css';
import LandingPage from './layouts/LandingPage/LandingPage';

class Main extends React.Component {
    render() {
        return (
            <LandingPage />
        );
    }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
