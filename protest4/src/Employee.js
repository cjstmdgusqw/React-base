import React, {Component} from 'react';

class Employee extends Component{
    render(){
        let emps = [this.props.emps];
        return(
            <table border = "1">
                <tr><td>사번</td><td>이름</td><td>부서번호</td></tr>
                {
                    emps.map(emp =>{
                        return(<tr key = {emp.id}><td>{emp.id}</td><td>{emp.name}</td><td>{emp.dept}</td></tr>)
                    })
                }
            </table>
        )
    }
}

export default Employee;







// import React, {Component} from 'react';

// class Employee extends Component{
//     render(){
//         let {id, name, dept} = this.props.emp;
//         return(
//             <tr>
//                 <td>{id}</td>
//                 <td>{name}</td>
//                 <td>{dept}</td>
//             </tr>
//         )
        

//     }
// }


// export default Employee;