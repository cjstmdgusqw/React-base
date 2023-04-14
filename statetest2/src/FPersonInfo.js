import {usestate} from 'react';

function FPersonInfo(){
    const [name, setName] = usestate('hong');
    const [age, setage] = usestate(20);
    const [height, setheight] = usestate(172);
    const [weight, setweight] = usestate(72);
    return(
        <>
            <label>이름 : </label><input type = "text" name = 'name' onChange={(e)=> setName(e.target.value)} /><br/>
            <label>나이 : </label><input type = "text" name = 'age'  onChange={(e)=> setage(e.target.value)}/><br/>
            <label>키 : </label><input type = "text" name = 'height'  onChange={(e)=> setheight(e.target.value)}/><br/>
            <label>몸무게 : </label><input type = "text" name = 'weight' onChange={(e)=> setweight(e.target.value)} /><br/>
            <h1>{`이름 : ${name}, 나이 : ${age}, 키 : ${height}, 몸무게 : ${weight}`}</h1>
        </>
    )
}

export default FPersonInfo;