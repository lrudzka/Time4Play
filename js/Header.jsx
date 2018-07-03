import React from 'react';

class Header extends React.Component{

    render(){
        return(
            <section id='header'>
                <div className='mainWidth headerBox'>
                    <div className="color red"></div>
                    <div className="color white"></div>
                    <div className="color blue"></div>
                    <p>MASTERMIND GAME</p>
                    <div className="color green"></div>
                    <div className="color pink"></div>
                    <div className="color yellow"></div>
                </div>
            </section>
        )
    }
}

module.exports = Header;