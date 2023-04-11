// import logo from './logo.svg';
import './App.css';
// import SubComponent from './SubCompoenets';
// import DefaultPropCom from './DefaultPropCom';
import PropsNode from './PropsNode';

function App(){
  return(
      <div>
          <h1>Start React!!</h1>
          <p>CSS 적용</p>
          {/* 다양한 타입의 props, props type 명시적 지정
          <SubComponent str = "react" num = {20} boolean = {1==1} obj = {{react : '리액트', exam : 100}}
          arr = {[10,20,30]} fucn = {console.log("I am Function")}/> */}

          {/* props의 기본값, 필수입력지정 */}
          {/* <DefaultPropCom  str = 'react' num = {100} /> */}

          <PropsNode>
            <span>node from App.js</span>
          </PropsNode>
      </div>
  );
}

export default App;
