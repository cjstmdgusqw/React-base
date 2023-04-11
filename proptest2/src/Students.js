import React, {Component} from 'react';
import Student from './Student';

class Students extends Component{
    render(){
        let pers = [...this.props.pers];
        console.log(pers);
        return(
            <table border = "1">
                <tr>
                    <th>이름</th>
                    <th>학년</th>
                    <th>학과</th>
                </tr>
                <tbody>
                    {pers.map((per) =>{
                        return(<Student per = {per}/>)
                        // return(
                        // <tr>
                        //     <td>{per.name}</td>
                        //     <td>{per.grade}</td>
                        //     <td>{per.subject}</td>
                        // </tr>)
                    })}
                    {/* <Student per = {pers[0]}/>
                    <Student per = {pers[1]}/> */}
                </tbody>
            </table>
        )
    }
}

export default Students;