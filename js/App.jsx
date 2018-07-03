import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';


class App extends React.Component{


    render(){

        return(
            <section id='mainSection'>
                <Header/>
                <Body/>
                <Footer/>
            </section>

        )
    }
}

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
})