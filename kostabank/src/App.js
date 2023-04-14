import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header'
import MakeAccount from './component/MakeAccount'; 
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw2';
import AccountInfo from './component/AccountInfo';
import AllAccountInfo from './component/AllAccountinfo';
import Main from './component/Main';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route exact path='/' element = {<Main/>}></Route>
        <Route exact path='/makeaccount' element = {<MakeAccount/>}></Route>
        <Route exact path='/deposit' element = {<Deposit/>}></Route>
        <Route exact path='/withdraw' element = {<Withdraw/>}></Route>
        <Route exact path='/accountinfo' element = {<AccountInfo/>}></Route>
        <Route exact path='/allaccountinfo' element = {<AllAccountInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
