import {useState} from 'react';
const Deposit = () => {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState('');
    const [deposit, setDeposit] = useState({id:'', money:''});

    const changeDeopsit = (e) => {
        setDeposit({...deposit, [e.target.name]:e.target.value});
    }

    const submit = (e) =>{
        //backend에 입금을 위한 전송 후 잔액을 받는다.
        setMessage(`입금 성공 (잔액 : ${100000+ +deposit.money})`);
        setModal(true);
        e.preventDefault();
    }
    return(
        <>
            <table border = "1">
                <tbody>
                    <tr>
                        <th>계좌번호</th>
                        <th><input type = "text" name = "id" onChange={changeDeopsit}/></th>
                    </tr>
                    <tr>
                        <td>입금액</td>
                        <td><input type = "text" name = "money" onChange={changeDeopsit}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type = "submit" value = "입금" onClick={submit}/></td>
                    </tr>
                </tbody>
            </table>
            {modal && <div>{message}</div>}
        </>
    )
}

export default Deposit;