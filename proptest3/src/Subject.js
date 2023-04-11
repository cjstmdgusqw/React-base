import React, {Component} from 'react';

class Subject extends Component{
    render(){
        let option = [...this.props.subjects]
        console.log(option);
        return (
                // option.map((opt) =>{
                //     return (<option>{opt}</option>)
                // })

                option.map((opt)=>{
                    return(<option value = {opt.key}>{opt.Text}</option>)
                })
            

        )
    }
}

export default Subject;

// key = {index}