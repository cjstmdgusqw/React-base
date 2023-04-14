import {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input ,Table } from 'reactstrap';
import Swal from 'sweetalert2';

const AccountInfo =() => {
    const formStyle = {width:'500px', margin:'20px auto', border:'1px solid lightgray', padding:'30px', borderRadius:'7px'}
    const [id, setId] = useState('');
    const [acc, setAcc] = useState({id:'',name:'',balance:'0',type:'',});
    const submit = (e) => {
        
        setAccount({...acc});
        e.preventDefault();
    }
    return(
    <> 
        <h4 style={{textAlign:'center'}}>계좌조회</h4><br/>
        <Form style={formStyle}>
        <FormGroup row>
            <Label for="id" sm={3}>계좌번호</Label>
            <Col sm={9}>
                <Input type="text" name="id" id="id" onChange={changeInput}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="name" sm={3}>이름</Label>
            <Col sm={9}>
                <Input type="text" name="name" id="name" onChange={changeInput}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="money" sm={3}>입금액</Label>
            <Col sm={9}>
                <Input type="text" name="money" id="money" onChange={changeInput}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="type" sm={3}>계좌종류</Label>
            <Col sm={9}>
                <Input type="radio" name="type" id="type" value="normal" onChange={changeInput} checked={acc.type=='normal'}/>{' 일반계좌 ' }&nbsp;&nbsp;
                <Input type="radio" name="type" id="type" value="special" onChange={changeInput}/>{' 특수계좌 ' }
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="grade" sm={3}>등급</Label>
            <Col sm={9}>
                <Input type="select" name="grade" id="grade" onChange={changeInput} disabled={acc.type=='normal'}>
                    <option>선택하세요</option>
                    <option>VIP</option>
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>Normal</option>
                </Input>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Col sm={12}>
            <Button color="primary" style={{width:"100%"}} onClick={submit}>계좌개설</Button>
            </Col>
        </FormGroup>
        </Form>
        <Table bordered>
        <tbody>
            <tr>
                <th scope="row">계좌번호</th>
                <td>{acc.id}</td>
            </tr>
            <tr>
                <th scope="row">이름</th>
                <td>{acc.name}</td>
            </tr>
            <tr>
                <th scope="row">잔액</th>
                <td>{acc.balance}</td>
            </tr>
            <tr>
                <th scope="row">계좌종류</th>
                <td>{acc.type}</td>
            </tr>
            <tr>
            {acc.type === 'special' }
                <th scope="row">등급</th>
                <td>{acc.grade}</td>
            </tr>
        </tbody>   
        </Table>
    </>
    )
}