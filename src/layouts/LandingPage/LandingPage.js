import React from 'react';
import ReactDOM from 'react-dom';
import styles from './LandingPage.css';

// Is there a way to import these two in one statment? like '/global/*'?
import HeaderComponent from './../../components/global/Header/HeaderComponent';
import FooterComponent from './../../components/global/Footer/FooterComponent';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <p>Content of page...</p>
                <FooterComponent />
            </div>
        );
    }
}
