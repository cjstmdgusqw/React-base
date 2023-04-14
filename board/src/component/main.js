import { Link } from 'react-router-dom';
function Main(){
    return(
        <>
        <img src="/upload/logo.png"/>
        <Link to={'/login'} className='a-item'>로그인</Link>nbsp;
        <Link to={'/join'} className='a-item'>회원가입</Link>nbsp;
        <Link to={'/boardlist'} className='a-item'>게시판</Link>nbsp;
        {/* <a href="/boardlist">게시판</a><br></br> */}
        </>
    )
   
}
export default Main