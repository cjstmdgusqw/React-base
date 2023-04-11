import './App.css';
import Students from './Students';


function App() {
  
const pers = [{name : 'hong', grade : 1, subject : 'computer'},
              {name : 'song', grade : 2, subject : 'emglish'}];
  return (
    <div>
      <Students pers = {pers}/>
    </div>
  );
}

export default App;
