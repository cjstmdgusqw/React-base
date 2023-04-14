// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MakeAccount from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw2';
import AllAccountInfo from './component/AllAccountinfo';
import BankTop from './component/Banktop';
import {Routes, Route} from 'react-router-dom'
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <BankTop/>
      <Routes>
        <Route exact path = "/" element = {<MakeAccount/> }></Route>
        <Route exact path = "/accountInfo" element = {<AccountInfo/> }></Route>
        <Route exact path = "/deposit" element = {<Deposit/> }></Route>
        <Route exact path = "/withdraw" element = {<Withdraw/> }></Route>
        <Route exact path = "/allaccountInfo" element = {<AllAccountInfo/>}></Route>
      </Routes>
   
    <Login/>
      
    </div>
  );
}

export default App;
