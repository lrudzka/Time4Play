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
                <button className='checkColors'> Check </button>
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
