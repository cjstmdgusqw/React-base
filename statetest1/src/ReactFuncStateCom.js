import { useState } from "react";
function ReactFunStateCom(){
    const [color, setColor] = useState("red"); // setColor을 통해서 바꿔줘야한다.

    const changeColor = (e) =>{
        setColor('Blue');
    }

    return(
        <>
            <h1>My favorite color is {color}!</h1>
            {/* <button type = 'button' onClick = {() => setColor('Blue')}>Blue</button> */}
            <button type = 'button' onClick = {changeColor}>Blue</button>
        </>
    )
}

export default ReactFunStateCom;