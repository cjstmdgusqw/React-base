import {ListGroup, ListGroupItem, Badge} from "reactstrap";

const ReactstrapListGroup = () => {

    return(
        <ListGroup style={{width : '300px', margin : '10px auto'}}>
            <ListGroupItem tag = 'a' href = 'http://kosta.com' color = "light" className='justify-content-between'>samsung lions
                &nbsp;<Badge pill>14</Badge>
            </ListGroupItem>
            <ListGroupItem color = "light" className='justify-content-between'>lg tweens
                &nbsp;<Badge pill>2</Badge>
            </ListGroupItem>
            <ListGroupItem color = "light" className='justify-content-between'>lotte Giant
                &nbsp;<Badge pill>1</Badge>
            </ListGroupItem>
        </ListGroup>
    )
}
export default ReactstrapListGroup;