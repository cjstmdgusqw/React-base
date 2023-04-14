import {usestate} from 'react';

export default function FPersonInfo2(){
    const [person, setPerson] = usestate({name : 'hong' ,age : 20, height : 173.5, weight : 65});

    const changePerson = (e) => {
        let name = e.target.name
        let value = e.target.value
        setPerson({...person, [name]:value})
    }

    return(
        <>
            <label>이름 : </label><input type = "text" name = 'name' onChange={changePerson} /><br/>
            <label>나이 : </label><input type = "text" name = 'age'  onChange={changePerson}/><br/>
            <label>키 : </label><input type = "text" name = 'height'  onChange={changePerson}/><br/>
            <label>몸무게 : </label><input type = "text" name = 'weight' onChange={changePerson} /><br/>
            <h1>{`이름 : ${person.name}, 나이 : ${person.age}, 키 : ${person.height}, 몸무게 : ${person.sweight}`}</h1>
        </>
    )
}