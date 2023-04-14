import {UncontrolledTooltip} from "reactstrap";


export default function ReactstrapTooltop(){
    return(
        <div>
            <p>
            Somewhere in here is a &nbsp;
            <span style = {{textDecoration:'underline', color : 'blue'}}
                href = '#' id = 'tooltipexam'>Tooltip</span>
            <UncontrolledTooltip placement = "bottom" target={"tooltipexam"}>
                Hello Tooltip    
            </UncontrolledTooltip>    
            </p>
        </div>
    )
}