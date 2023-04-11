import React, {Component} from 'react';

class PropTest extends Component{
    render(){
        let name = this.props.name;
        let age = this.props.age;
        // let {name, age} = this.props.info;
        return(
            <div>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </div>
        )
    }
}

export default PropTest;