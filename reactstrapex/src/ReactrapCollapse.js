import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const ReactstrapCollapse = () => {
    return(
        <>
        <Button color = 'warning' id=  "toggle" style = {{marginBottom :'10px'}}>
            펼치기/접기
        </Button>
        <UncontrolledCollapse toggler= 'toggle'>
            <Card style = {{width : "250px"}}>
                <CardBody >
                    Lorem ipsum sodl
                </CardBody>
            </Card>

        </UncontrolledCollapse>
        </>
    )
}
export default ReactstrapCollapse;