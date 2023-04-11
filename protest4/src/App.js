// import logo from './logo.svg';
import './App.css';
import Department from './Department';
import Employee from './Employee';


function App() {
  let department = [{id : 10, name : '홍보부'},{id : 11, name : '개발부'}, {id : 12, name : '영업부'}];
   let employee = [{id : 100, name : '홍길동', dept : 10},{id : 101, name : '김길동', dept : 20},{id : 102, name : '고길동', dept : 30}]
  return (
    <div>
      <div>
      <select>
        <Department depts = {department}/>
      </select>
      </div>
     
      <div>
      <Employee emps = {employee}/> 
      </div>
    </div>
  );
}

export default App;

//department는 select형태로
// 임플로이는 테이블형태로
