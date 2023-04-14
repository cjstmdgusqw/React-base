import {Link } from 'react-router-dom';
// import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
// import Writeform from './writeform';
function Boardlist() {
    const [accs, setaccs] = useState([]);

    useEffect(
        function(){
            let raccs = [{id : '1001', name : '홍길동', title : '이누야샤', date : 'normal', grade:'200'},
            {id : '1002', name : '김길동', title : '카트라이더', date : 'special', grade:'100'},
            {id : '1003', name : '고길동', title : '하고싶은일', date : 'special', grade:'10'},
            {id : '1004', name : '하길동', title : 'Java', date: 'special', grade:'50'},
            {id : '1005', name : '장길동', title : 'rate', date: 'normal', grade:'20'}]
        setaccs([...accs, ...raccs]);    
        },[]
    )

    return(
        <>
        <h3>글 목록 &nbsp;&nbsp;

            <Link to = {'/writeform'} className='a-item'>글쓰기</Link>

            </h3>
            <form action="./search" method="post">					
            <h5>
                <select name="type">
                    <option value="subject">제목</option>
                    <option value="writer">작성자</option>
                    <option value="content">내용</option>
                </select>
                <input type="text" name="word"/>
                <input type="submit" value="검색"/>
            </h5>
            </form>					
            <table>
                <thead>
                    <tr id="tr_top"><th>번호</th><th>제목</th><th>작성자</th><th>날짜</th><th>조회수</th><td>삭제</td></tr>
                </thead>
                <tbody>
                    {
                        accs.map(acc=>{
                            return(
                                <tr key = {acc.id}>
                                <td>{acc.id}</td>   
                                <td>{acc.balance}</td>
                                <td>{acc.name}</td>
                                <td>{acc.type}</td>
                                <td>{acc.grade}</td> </tr>
                            )
                        })
                    }
                </tbody>
            </table>


            

        </>
    )
}

export default Boardlist;