import {Form, Label, Input, Row, Col, FormGroup} from 'reactstrap';

const ReactstrapForm = () => {
    return(
        <Form>
            <Label for ="exampleGender">Gender</Label>
            <Input type = 'select' bsSize='sm'>
                <option>no select</option>
                <option>woman</option>
                <option>man</option>
            </Input>
            <Row>
                <Col md = {6}>
                    <FormGroup>
                        <Label for = "exampleAddress">Address</Label>
                        <Input type = "text" name = "address" id = "address"/>
                    </FormGroup>
                </Col>
                <Col md = {4}>
                    <FormGroup>
                        <Label for = "exampleMobile">Mobile</Label>
                        <Input type = "text" name = "mobile" id = "mobile"/>
                    </FormGroup>
                </Col>
                <Col md = {2}>
                    <FormGroup>
                        <Label for = "exampleAge">Address</Label>
                        <Input type = "text" name = "age" id = "age"/>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default ReactstrapForm;