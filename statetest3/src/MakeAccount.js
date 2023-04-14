import {useState} from 'react'; 

export default function MakeAccount(){
    // const [isgrade, setIsgrade] = useState(false);
    const [account, setAccount] = useState({id : '', name:'', money : '', type : 'normal', grade:''})

    // const changePerson = (e) => {
    //     let name = e.target.name
    //     let value = e.target.value
    //     setAccount({...account, type:e.target.value})
    // }

    const changeAccount = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setAccount({...account, [name]:value})
    }

    
    // const changeType = (e) => {
    //     if(e.target.value === 'special'){
    //         setIsgrade(true);
    //     }else{
    //         setIsgrade(false);
    //     }
    //     setAccount({...account, type:e.target.value})
    // }

    const submit = (e) => {
        console.log(account);
        e.preventDefault();
    }
    return(
        <>
        <h3>계좌개설</h3>
   

        <table border="1">
            <tr>
                <th>계좌번호</th>
                <td><input type="text" name = "id" onChange={changeAccount}/></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text" name = "name"  onChange={changeAccount}/></td>
            </tr>
            <tr>
                <td>입금액</td>
                <td><input type="text" name = "money" onChange={changeAccount}/></td>
            </tr>
            <tr>
                <td>종류</td>
                <td>
                    <input type="radio" name = "type" value = "normal" onChange={changeAccount} checked = {account.type === 'normal'}/>일반
                    <input type="radio" name = "type" value = "special" onChange={changeAccount}/>특수
                </td>
                
            </tr>
            <tr>
                <td>등급</td>
                <td>
                    <select name="grade" id="" disabled = {account.type === 'normal'} onChange={changeAccount}>
                        <option value="">선택하세요</option>
                        <option value="">VIP</option>
                        <option value="">Gold</option>
                        <option value="">Silver</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="개설"  onClick={submit}/></td>
            </tr>
        </table>
        </>
    );
}