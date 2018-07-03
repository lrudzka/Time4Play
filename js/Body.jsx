import React from 'react';
import Color from './Services/Color';
import Number from './Services/Number';
import CheckColors from './Services/CheckColors';


class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
            lvl1Status: false,
            lvl1Number1: 0,
            lvl1Number2: 0,
            lvl1Number3: 0,
            lvl1Number4: 0,
            lvl2Status: false,
            lvl2Number1: 0,
            lvl2Number2: 0,
            lvl2Number3: 0,
            lvl2Number4: 0,
            lvl3Status: false,
            lvl3Number1: 0,
            lvl3Number2: 0,
            lvl3Number3: 0,
            lvl3Number4: 0,
            lvl4Status: false,
            lvl4Number1: 0,
            lvl4Number2: 0,
            lvl4Number3: 0,
            lvl4Number4: 0,
            lvl5Status: false,
            lvl5Number1: 0,
            lvl5Number2: 0,
            lvl5Number3: 0,
            lvl5Number4: 0,
            lvl6Status: false,
            lvl6Number1: 0,
            lvl6Number2: 0,
            lvl6Number3: 0,
            lvl6Number4: 0,
            lvl7Status: false,
            lvl7Number1: 0,
            lvl7Number2: 0,
            lvl7Number3: 0,
            lvl7Number4: 0,
            lvl8Status: false,
            lvl8Number1: 0,
            lvl8Number2: 0,
            lvl8Number3: 0,
            lvl8Number4: 0,
            lvl9Status: false,
            lvl9Number1: 0,
            lvl9Number2: 0,
            lvl9Number3: 0,
            lvl9Number4: 0,
            lvl10Status: false,
            lvl10Number1: 0,
            lvl10Number2: 0,
            lvl10Number3: 0,
            lvl10Number4: 0
        }
    }

    handleClick = () => {
        if (this.state.lvl1Status == false) {
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
                console.log('hiddenNumber:', this.hiddenNumber1, this.hiddenNumber2, this.hiddenNumber3, this.hiddenNumber4);
            } ,5250)
            setTimeout(()=> {
                this.setState({
                    lvl1Status: true
                })
            } ,5500)
        } else if (this.state.lvl2Status == false) {
            console.log(CheckColors.compareColors(this.hiddenNumber1, this.hiddenNumber2, this.hiddenNumber3, this.hiddenNumber4,
                                      this.state.number1, this.state.number2, this.state.number3, this.state.number4));
            this.setState({
                lvl2Status: true
            })

        }
    }

    handleChooseColor1 = () => {
        if (this.state.lvl2Status == false) {
            if (this.state.number1 == 6) {
                this.setState({
                    number1: 1,
                    lvl1Number1: 1
                })
            } else {
                let newNumber1 = this.state.number1 + 1;
                this.setState({
                    number1: newNumber1,
                    lvl1Number1: newNumber1
                })
            }
        }
    }

    handleChooseColor2 = () => {
        if (this.state.lvl2Status == false) {
            if (this.state.number2 == 6) {
                this.setState({
                    number2: 1,
                    lvl1Number2: 1
                })
            } else {
                let newNumber2 = this.state.number2 + 1;
                this.setState({
                    number2: newNumber2,
                    lvl1Number2: newNumber2
                })
            }
        }
    }

    handleChooseColor3 = () => {
        if (this.state.lvl2Status == false) {
            if (this.state.number3 == 6) {
                this.setState({
                    number3: 1,
                    lvl1Number3: 1
                })
            } else {
                let newNumber3 = this.state.number3 + 1;
                this.setState({
                    number3: newNumber3,
                    lvl1Number3: newNumber3
                })
            }
        }
    }

    handleChooseColor4 = () => {
        if (this.state.lvl2Status == false) {
            if (this.state.number4 == 6) {
                this.setState({
                    number4: 1,
                    lvl1Number4: 1
                })
            } else {
                let newNumber4 = this.state.number4 + 1;
                this.setState({
                    number4: newNumber4,
                    lvl1Number4: newNumber4
                })
            }
        }
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
        let style11 = {
            backgroundColor: Color.returnColor(this.state.lvl1Number1)
        };
        let style12 = {
            backgroundColor: Color.returnColor(this.state.lvl1Number2)
        };
        let style13 = {
            backgroundColor: Color.returnColor(this.state.lvl1Number3)
        };
        let style14 = {
            backgroundColor: Color.returnColor(this.state.lvl1Number4)
        };

        return(
           <section id='body'>
               <div className='mainWidth'>
                   {!this.state.lvl1Status?
                   <div id='boardHeader'>
                       <div style = {style1} className='ballHeader'></div>
                       <div style = {style2} className='ballHeader'></div>
                       <div style = {style3} className='ballHeader'></div>
                       <div style = {style4} className='ballHeader'></div>
                   </div> :
                   <div id='boardHeader'>
                       <div  className='ballHeader'></div>
                       <div  className='ballHeader'></div>
                       <div  className='ballHeader'></div>
                       <div  className='ballHeader'></div>
                   </div>}
                   <button onClick={this.handleClick} id='play'>{this.state.lvl1Status? 'TRY YOUR COLORS' : '*** PLAY ***'}</button>
                   <div id='board'>
                       {!this.state.lvl2Status?
                       <div className="row">
                           {this.state.lvl1Status && <section>
                               <div style = {style11} onClick = {this.handleChooseColor1} className='ball active'></div>
                               <div style = {style12} onClick = {this.handleChooseColor2} className='ball active'></div>
                               <div style = {style13} onClick = {this.handleChooseColor3} className='ball active'></div>
                               <div style = {style14} onClick = {this.handleChooseColor4} className='ball active'></div>
                           </section>}
                       </div> :
                       <div className="row">
                           {this.state.lvl1Status && <section>
                               <div style = {style11} className='ball'></div>
                               <div style = {style12} className='ball'></div>
                               <div style = {style13} className='ball'></div>
                               <div style = {style14} className='ball'></div>
                           </section>}
                       </div>
                       }
                       <div className="row">
                           {this.state.lvl2Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>
                       <div className="row">
                           {this.state.lvl3Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>
                       <div className="row">
                           {this.state.lvl4Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>
                       <div className="row">
                           {this.state.lvl5Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>
                       <div className="row">
                           {this.state.lvl6Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>
                       <div className="row">
                           {this.state.lvl7Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>
                       <div className="row">
                           {this.state.lvl8Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>
                       <div className="row">
                           {this.state.lvl9Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>
                       <div className="row">
                           {this.state.lvl10Status&& <section>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                               <div className='ball'></div>
                           </section>}
                       </div>

                   </div>
               </div>

           </section>
        )
    }
}

module.exports = Body;