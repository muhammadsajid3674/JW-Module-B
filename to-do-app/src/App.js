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

  let edit = () => {
    console.log(list)
  }
  
  let deleteAll = () => {
    setList([])
  }

  let deleteItem = (id) => {
    let listI = list.filter((value, index) => {
      return index != id
    }) 
    console.log(listI)
    setList(listI)
  }
  // list = []
  // text = ""

  return (
    <div className="App">
      <h1>To Do App</h1>
      <input placeholder='Enter Value' onChange={(e) => setText(e.target.value)} />
      <button className='btn addBtn' onClick={add}>Add</button>
      <button className='btn deleteAllBtn' onClick={deleteAll}>Delete All</button>
      {/* <Btn btnValue="Delete All" classes="deleteAllBtn" /> */}
      <ol>{list.map((value, index) => {
        return <li className='listItems' key={index}>{value}
          <i className="fa-regular fa-pen-to-square listI" onClick={edit}></i>
          <i className="fa-solid fa-trash listI" onClick={deleteItem}></i>
          </li>
      })}</ol>
    </div>
  );
}

export default App;
