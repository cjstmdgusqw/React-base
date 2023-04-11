import React, {Component} from 'react';
class Student extends  Component{
    render(){
        // let pers = this.props.per;
        let {grade, name, subject} = this.props.per;
        return(
            <tr>
                <td>{name}</td>
                <td>{grade}</td>
                <td>{subject}</td>
            </tr>
        );
    }
}
export default Student;