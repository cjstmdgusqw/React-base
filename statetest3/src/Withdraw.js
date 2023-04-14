import { useState } from "react";

const Withdraw = () => {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState('');
    const[withdraw, setwithdraw] = useState({id : '', name : ''});

    const changeWithdraw = (e) =>{
        setwithdraw({...withdraw, [e.target.name]:e.target.value});
    }

    const submit = (e) =>{
        setMessage(`출금 성공 (잔액 : ${100000- +withdraw.money})`);
        setModal(true);
        e.preventDefault();
    }

        return(
            <>
            <table border = "1">
                <tbody>
                    <tr>
                        <th>계좌번호</th>
                        <th><input type = "text" name = "id" onChange={changeWithdraw}/></th>
                    </tr>
                    <tr>
                        <td>출금</td>
                        <td><input type = "text" name = "money" onChange={changeWithdraw}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type = "submit" value = "출금" onClick={submit}/></td>
                    </tr>
                </tbody>
            </table>
            {modal && <div>{message}</div>}
        </>
        
        )
}

export default Withdraw;