import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './component/main';
import Detailform from './component/detailform';
import Boardlist from './component/boardlist';
import Writeform from './component/writeform';
import Login from './component/login';

function App() {
  return (
    <div>
      <Main/>
      <Routes>
        <Route exact path = "/boardlist" element = {<Boardlist/>}></Route>
        <Route exact path = "/writeform" element = {<Writeform/>}></Route>
        
        <Route exact path = "/detailform" element = {<Detailform/>}></Route>
        <Route exact path = "/login" element = {<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

