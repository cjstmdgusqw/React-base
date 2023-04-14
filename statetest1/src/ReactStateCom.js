import React, {Component} from 'react';

class ReactStateCom extends Component{
    constructor(props){
        super(props);
        this.state = { // 변수를 설정해주기위해서는 state를 안해서 해줘야한다?
            str : 'REACT', 
            num : 100,
        }

    }
    stateChange = (e) => {
        this.setState({num:200});
    }

    strChange = (e) => {
        this.setState({str : "React"});
    }

    render(){
        return(
            <>
            <div style={{padding:"0px"}}>
                {this.state.str} : {this.state.num}
            </div>
            {/* <button type = 'button' onClick = {()=> this.setState({num : 200})}>200</button> */}
            {/* <button type = 'button' onClick = {this.stateChange}>200</button> */}
            {/* <button type = 'button' onClick = {()=> this.setState({str : "React"})}>React</button> */}
            <button type = 'button' onClick = {this.strChange}>React</button>
            </>
        )   
    }
}

export default ReactStateCom;