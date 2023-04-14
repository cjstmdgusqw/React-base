import React, {Component} from 'react';

class PersonInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : 'hong',
            age : 20,
            height : 173.5,
            weight : 65
        }
    }

    nameChange = (e) => {
        this.setState({name:e.target.value});
    }

    ageChange = (e) => {
        this.setState({age : e.target.value})
    }

    heightChange = (e) => {
        this.setState({height : e.target.value})
    }

    widthChange = (e) => {
        this.setState({weight : e.target.value})
    }

    inputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]:value});
    }

    render(){
        return(
            <>
                <label>이름 : </label><input type = "text" name = 'name' onChange={this.nameChange} /><br/>
                <label>나이 : </label><input type = "text" name = 'age'  onChange={this.ageChange}/><br/>
                <label>키 : </label><input type = "text" name = 'height'  onChange={this.heightChange}/><br/>
                <label>몸무게 : </label><input type = "text" name = 'weight' onChange={this.widthChange} /><br/>
                <h1>{`이름 : ${this.state.name}, 나이 : ${this.state.age}, 키 : ${this.state.height}, 몸무게 : ${this.state.weight}`}</h1>
            </>
        )
    }
}

export default PersonInfo;