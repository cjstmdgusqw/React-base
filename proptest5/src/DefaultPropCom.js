import React, {Component} from "react";
import datatype from 'prop-types';

class DefaultPropCom extends Component{
    render(){
        let {str, num} = this.props;
        return(
            <div style = {{padding : '0px'}}>
                {str}{num}
            </div>
        )
    }
}

DefaultPropCom.defaultProps = { // 기본값 생성할 수 있다 디폴트생성!
    str: "리액트",
    num : 10
}

// datatype:isRequired 필수라네요
DefaultPropCom.propTypes = {
    str:datatype.string.isRequired
}

export default DefaultPropCom;