import {Badge, Button} from 'reactstrap';

const ReactstrapBadge = () => {
    return(
        <>
            <h1>PRODUCT NAME<Badge color = 'secondary'>hit</Badge></h1>
            <Button color = 'info' outline>
                Accessor <Badge color = 'dark'>4</Badge>
            </Button>
            <Badge color = 'danger' pill>pill</Badge>
            <Badge href = "http://kosta.com" color='warning'>Golink</Badge>
        </>
    )
}

export default ReactstrapBadge;