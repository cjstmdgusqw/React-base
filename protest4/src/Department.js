import React, {Component} from 'react';

class Department extends Component{
    render(){
        let depts = [...this.props.depts];
        return(
            depts.map((dep)=>{
                return (<option id = {dep.id}>{dep.name}</option>)
            })
        )
    }
}

export default Department;