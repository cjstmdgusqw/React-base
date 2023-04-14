// import {useState} from 'react';

const Login = () => {
    return(
        <div>
            <label>아이디</label><input type = "text" className='id' id = "id"></input>
            <label>비밀번호</label><input type = "password" className='password' id = "password"></input>
            <button>로그인하기</button>
        </div>
    )
}
export default Login;