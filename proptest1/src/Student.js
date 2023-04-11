import React, {Component} from 'react';
import Student from '../../proptest2/src/Student';

class Student extends Component{
    render(){
        let pers = [...this.props.pers];
        return(
            <table border = "1">
                <tr>
                    <th>이름</th>
                    <th>학년</th>
                    <th>학과</th>
                </tr>
                {
                    pers.forEach(function(item){
                        <Student per = {item}/>
                    })
                }
            </table>
        )
    }

}
export default Students;