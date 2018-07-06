import React from 'react';
import Color from './Services/Color';
import Number from './Services/Number';
import CheckColors from './Services/CheckColors';
import BoardRow from './BoardRow.jsx';


class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
            lvlStatus: 0,
            finishInfo: 'Koniec gry'
        }
    }

    handleClick = () => {
        if (this.state.lvlStatus == 0) {
            let intId1 = setInterval(() => {
                let number1 = Number.returnNumber1to6();
                this.setState({
                    number1: number1
                })
            }, 500)

            let intId2 = setInterval(() => {
                let number2 = Number.returnNumber1to6();
                this.setState({
                    number2: number2
                })
            }, 700)

            let intId3 = setInterval(() => {
                let number3 = Number.returnNumber1to6();
                this.setState({
                    number3: number3
                })
            }, 400)
            let intId4 = setInterval(() => {
                let number4 = Number.returnNumber1to6();
                this.setState({
                    number4: number4
                })
            }, 800)
            setTimeout(() => {
                clearInterval(intId1);
                clearInterval(intId2);
                clearInterval(intId3);
                clearInterval(intId4);
                this.setState({
                    number1: 0,
                    number2: 0,
                    number3: 0,
                    number4: 0
                })
            }, 5000)
            setTimeout(()=> {
                this.hiddenNumber1 = Number.returnNumber1to6();
                this.hiddenNumber2 = Number.returnNumber1to6();
                this.hiddenNumber3 = Number.returnNumber1to6();
                this.hiddenNumber4 = Number.returnNumber1to6();
            } ,5250)
            setTimeout(()=> {

                this.setState({
                    lvlStatus: 1
                })
            } ,5500)
        } else {
            window.location.reload();
        }
    }

    handleNextLvl = (number, txt) => {
        let newLvl = number+1;
        this.setState({
            lvlStatus: newLvl,
            finishInfo: txt
        })
    }


    render(){


        let style1 = {
            backgroundColor: Color.returnColor(this.state.number1)
        };
        let style2 = {
            backgroundColor: Color.returnColor(this.state.number2)
        };
        let style3 = {
            backgroundColor: Color.returnColor(this.state.number3)
        };
        let style4 = {
            backgroundColor: Color.returnColor(this.state.number4)
        };

        let styleFinish1 = {
            backgroundColor: Color.returnColor(this.hiddenNumber1)
        };
        let styleFinish2 = {
            backgroundColor: Color.returnColor(this.hiddenNumber2)
        };
        let styleFinish3 = {
            backgroundColor: Color.returnColor(this.hiddenNumber3)
        };
        let styleFinish4 = {
            backgroundColor: Color.returnColor(this.hiddenNumber4)
        };


        let iArray = [0,1,2,3,4,5,6,7,8,9];

        let finishInfoView;
        let boardHeaderView;

        if ( this.state.lvlStatus.toFixed(0)!=this.state.lvlStatus  ) {
            finishInfoView = <div className='endInfo'> {this.state.finishInfo} </div>
            boardHeaderView = <div id='boardHeader'>
                                <div style = {styleFinish1} className='ballHeader'></div>
                                <div style = {styleFinish2} className='ballHeader'></div>
                                <div style = {styleFinish3} className='ballHeader'></div>
                                <div style = {styleFinish4} className='ballHeader'></div>
                            </div>
        } else if ( this.state.lvlStatus == 0 ) {
            boardHeaderView = <div id='boardHeader'>
                                <div style = {style1} className='ballHeader'></div>
                                <div style = {style2} className='ballHeader'></div>
                                <div style = {style3} className='ballHeader'></div>
                                <div style = {style4} className='ballHeader'></div>
                              </div>
        } else {
            boardHeaderView = <div id='boardHeader'>
                                <div  className='ballHeader'></div>
                                <div  className='ballHeader'></div>
                                <div  className='ballHeader'></div>
                                <div  className='ballHeader'></div>
                              </div>
        }


        return(
           <section id='body'>

               <div className='mainWidth'>

                   {boardHeaderView}

                   <button onClick={this.handleClick} id='play'>{this.state.lvlStatus == 0? '*** PLAY ***' : 'RESTART'}</button>

                   <div id='board'>

                       {iArray.map( el => <BoardRow  key={el}
                                                     id = {el+1}
                                                     hiddenNumber1 = {this.hiddenNumber1}
                                                     hiddenNumber2 = {this.hiddenNumber2}
                                                     hiddenNumber3 = {this.hiddenNumber3}
                                                     hiddenNumber4 = {this.hiddenNumber4}
                                                     lvlStatus = {this.state.lvlStatus}
                                                     actionNextLvl = {this.handleNextLvl}
                       />  )}

                   </div>

                   <div className="legendInfo">
                       <div className='legendRow'>
                           <div className="legendPoint whitePoint"></div>
                           <div>
                               <em> one correct color at the incorrect place</em>
                           </div>
                       </div>
                       <div className='legendRow'>
                           <div className="legendPoint blackPoint"></div>
                           <div>
                               <em> one correct color at the correct place</em>
                           </div>
                       </div>
                   </div>

                   {finishInfoView}

               </div>

           </section>
        )
    }
}

module.exports = Body;