import React from 'react';
import CheckColors from './Services/CheckColors';
import Color from './Services/Color';

class BoardRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            setNumber1 : 0,
            setNumber2 : 0,
            setNumber3 : 0,
            setNumber4 : 0,
            hiddenNumber1 : this.props.hiddenNumber1,
            hiddenNumber2 : this.props.hiddenNumber2,
            hiddenNumber3 : this.props.hiddenNumber3,
            hiddenNumber4 : this.props.hiddenNumber4,
            lvlPoints : [0,0,0,0]
        }
    }

    handleChooseColor1 = () => {

        if (this.state.setNumber1 == 6) {
            this.setState({
                setNumber1: 1
            })
        } else {
            let newNumber = this.state.setNumber1+1;
            this.setState({
                setNumber1: newNumber
            })
        }
    }

    handleChooseColor2 = () => {

        if (this.state.setNumber2 == 6) {
            this.setState({
                setNumber2: 1
            })
        } else {
            let newNumber = this.state.setNumber2+1;
            this.setState({
                setNumber2: newNumber
            })
        }
    }

    handleChooseColor3 = () => {

        if (this.state.setNumber3 == 6) {
            this.setState({
                setNumber3: 1
            })
        } else {
            let newNumber = this.state.setNumber3+1;
            this.setState({
                setNumber3: newNumber
            })
        }
    }

    handleChooseColor4 = () => {

        if (this.state.setNumber4 == 6) {
            this.setState({
                setNumber4: 1
            })
        } else {
            let newNumber = this.state.setNumber4+1;
            this.setState({
                setNumber4: newNumber
            })
        }
    }

    handleCheckColors = () => {

        if (this.state.setNumber1 == 0 ||
            this.state.setNumber2 == 0 ||
            this.state.setNumber3 == 0 ||
            this.state.setNumber4 == 0 ) {
            alert("First set all 4 colors");
        } else {

            let newPointsArray = CheckColors.compareColors(this.props.hiddenNumber1, this.props.hiddenNumber2, this.props.hiddenNumber3,
                this.props.hiddenNumber4, this.state.setNumber1, this.state.setNumber2,
                this.state.setNumber3, this.state.setNumber4);
            this.setState({
                lvlPoints: newPointsArray
            })

            let lvlNumber = this.props.id;

            if ( newPointsArray[0]==2 && newPointsArray[1]==2 && newPointsArray[2]==2 && newPointsArray[3]==2  ) {
                if ( lvlNumber == 1 ) {
                    alert("CONGRATULATIONS!! YOU WON IN 1 STEP, HOW HAVE YOU DONE THAT, MASTER?")
                } else if ( lvlNumber > 1 && lvlNumber <= 4 ) {
                    alert("CONGRATULATIONS!! YOU WON IN "+ lvlNumber + " STEPS! I'M IMPRESSED!")
                } else if ( lvlNumber > 4 && lvlNumber <= 6 ) {
                    alert("CONGRATULATIONS!! YOU WON IN "+ lvlNumber + " STEPS! PRETTY GOOD!")
                } else {
                    alert("CONGRATULATIONS!! YOU WON IN "+ lvlNumber + " STEPS");
                }
                window.location.reload()
            }

            if ( lvlNumber == 10 ) {
                alert ("SORRY, NO WIN THIS TIME :-( TRY AGAIN");
                window.location.reload()
            }

            if (typeof this.props.actionNextLvl == 'function') {

                this.props.actionNextLvl(lvlNumber)
            }
        }
    }


    render(){

        let style1 = {
            backgroundColor: Color.returnColor(this.state.setNumber1)
        };
        let style2 = {
            backgroundColor: Color.returnColor(this.state.setNumber2)
        };
        let style3 = {
            backgroundColor: Color.returnColor(this.state.setNumber3)
        };
        let style4 = {
            backgroundColor: Color.returnColor(this.state.setNumber4)
        };
        let stylePoints1 = {
            backgroundColor: Color.returnPointsColor(this.state.lvlPoints[0])
        };
        let stylePoints2 = {
            backgroundColor: Color.returnPointsColor(this.state.lvlPoints[1])
        };
        let stylePoints3 = {
            backgroundColor: Color.returnPointsColor(this.state.lvlPoints[2])
        };
        let stylePoints4 = {
            backgroundColor: Color.returnPointsColor(this.state.lvlPoints[3])
        };

        let view;
        let button;

        if (this.props.lvlStatus == this.props.id) {
            view =
            <section>
                <div style = {style1} onClick = {this.handleChooseColor1} className='ball active'></div>
                <div style = {style2} onClick = {this.handleChooseColor2} className='ball active'></div>
                <div style = {style3} onClick = {this.handleChooseColor3} className='ball active'></div>
                <div style = {style4} onClick = {this.handleChooseColor4} className='ball active'></div>
            </section>
            button =
                <button onClick={this.handleCheckColors} className='checkColors'> Check </button>
        } else if ( this.props.lvlStatus > this.props.id){
            view =
            <section>
                <div style = {style1} className='ball'></div>
                <div style = {style2} className='ball'></div>
                <div style = {style3} className='ball'></div>
                <div style = {style4} className='ball'></div>
            </section>
        }


        return(

                <section className="bigRow">
                    <div className="points">
                        <div style={stylePoints1} className="pointsBall"></div>
                        <div style={stylePoints2} className="pointsBall"></div>
                        <div style={stylePoints3} className="pointsBall"></div>
                        <div style={stylePoints4} className="pointsBall"></div>
                    </div>
                    <div className="row">
                        {view}
                    </div>
                    {button}
                </section>

        )
    }
}



module.exports = BoardRow;
