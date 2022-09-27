import { useState } from 'react';
import './App.css';
import Btn from './components/Btn'

function App() {

  let [text, setText] = useState("");
  let [list, setList] = useState([]);

  // add button functionality
  let add = () => {
    list.push(text)
    setList([...list])
    // console.log(list)
    setText("")
  }
  
  // Delete All button functionality
  let deleteAll = () => {
    setList([])
  }

  // Delete item button functionality
  let deleteItem = (id) => {
    let listI = list.filter((value, index) => {
      return index !== id
    })
    setList(listI)
  }

  // Edit button functionality
  let editBtn = (elem) => {
    // let newValue = prompt("New Value")
    // console.log(newValue)
    // setList(newValue)
  }

  // list = []
  // text = ""

  return (
    <div className="App">
      <div className='container'>  
      <h1>To Do App</h1>
      <input placeholder='Enter Value' onChange={(e) => setText(e.target.value)} />
      <Btn btnValue="Add" classes="addBtn" clickName={add} />
      <Btn btnValue="Delete All" classes="deleteAllBtn" clickName={deleteAll} />
      <ol style={{listStyleType : "none", padding: "0px"}}>{list.map((value, index) => {
        return <li className='listItems' key={index}>{value}
          <span>
          <Btn classes="fa-regular fa-pen-to-square" clickName={() => editBtn(value)}/>
          <Btn classes="fa-solid fa-trash" clickName={() => deleteItem(index)}/>
          </span>
          </li>
      })}</ol>
      </div>
    </div>
  );
}

export default App;
