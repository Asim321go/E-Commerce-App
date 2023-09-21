import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const TodoList = () => {
  const [input, setInput] = useState()
  const [todos, setTodos] = useState([])
  const [toggleBtn, setToggleBtn] = useState(true);
  const [editItem, setEditItem] = useState()

  const addTodoItems = () => {
    if (!input) {
      alert("please fill Data")
    }
    else if (!toggleBtn) {
      const update = todos.map((curElem) => {
        return curElem.id === editItem ? { ...curElem, name: input } : curElem
      })
      setTodos(update);
      setInput("")
    }
    else {
      const addTodos = { id: new Date().getTime().toString(), name: input }
      setTodos([...todos, addTodos])
      setInput("")
    }
  }

  // delete todo items 
  const deleteTodo = (item) => {
    const removeItem = todos.filter((curElem) => curElem.id !== item.id)
    setTodos(removeItem)
  }

  // edit todolist item 
  const editTodos = (item) => {
    setInput(item.name)
    setToggleBtn(false)
    setEditItem(item.id)
  }

  return (
    <>
      <h1>TodoList</h1>
      <input type="text" placeholder="Add Your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {
        toggleBtn ? <button onClick={addTodoItems}>Add</button> : <span onClick={addTodoItems}><AiFillEdit /></span>
      }

      <ul>
        {
          todos.map((elem) => {
            return (
              <li key={elem.id}>{elem.name}
                <span onClick={() => deleteTodo(elem)}><AiFillDelete /></span>
                <span onClick={() => editTodos(elem)}><AiFillEdit /></span>
              </li>
            )
          })
        }

      </ul>
      <button onClick={() => setTodos([])}>clear All</button>
    </>
  )
}





const Timer = () => {
  const [second, setSecond] = useState(0)
  const [minutes, setMinutes] = useState(0)
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSecond(second + 1)
    }, 1000)
    if(timer === 59){
      setSecond(0)
      setMinutes(minutes+1)
    }
return () => {
  clearInterval(timer)
}

  })
  const restart = () => {
    setMinutes(0)
    setSecond(0)
  }

  const stop = () => {
    clearInterval(timer)
  }
  return (
    <>
      <h1>Timer</h1>
      <p>{minutes}:{second}</p>
      <button onClick={restart}>restart</button>
      <button onClick={(stop)}>stop</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
    <Timer />
  </>

);
























