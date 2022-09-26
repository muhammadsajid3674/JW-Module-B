import { useState } from 'react';
import './App.css';
import Btn from './components/Btn'

function App() {

  let [text, setText] = useState("");
  let [list, setList] = useState([]);

  let add = () => {
    list.push(text)
    setList([...list])
    // console.log(list)
  }
  
  let deleteAll = () => {
    setList([])
  }

  // list = []
  // text = ""

  return (
    <div className="App">
      <div className='container'>  
      <h1>To Do App</h1>
      <input placeholder='Enter Value' onChange={(e) => setText(e.target.value)} />
      <button className='btn addBtn' onClick={add}>Add</button>
      <button className='btn deleteAllBtn' onClick={deleteAll}>Delete All</button>
      {/* <Btn btnValue="Delete All" classes="deleteAllBtn" /> */}
      <ol>{list.map((value, index) => {
        return <li className='listItems' key={index}>{value}
          <i className="fa-regular fa-pen-to-square listI"></i>
          <i className="fa-solid fa-trash listI"></i>
          </li>
      })}</ol>
      </div>
    </div>
  );
}

export default App;
