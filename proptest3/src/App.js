// import logo from './logo.svg';
import './App.css';
import Subject from './Subject';

function App() {
  const subjects = [{key : 'js', Text : 'javascript'},
                    {key : 'java', Text : 'Java'},
                    {key : 'jq', Text : 'jquery'},
                    {key : 'hc', Text : 'HTML/CSS'},
                    {key : 'spring', Text : 'Spring Framework'}]
  return (
    <select name  = "subject">
      <Subject subjects = {subjects}/>
    </select>
  );
}

export default App;
