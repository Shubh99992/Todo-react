import React, { useState } from 'react'
import '../App.css'
const Todo = () => {
    const [allTodos, setTodos] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleAddTodo = () => {
        let newTodoItem = {
            title: newTitle,
            description: newDescription
        }
        let updatedTodo = [...allTodos];
        updatedTodo.push(newTodoItem);
        setTodos(updatedTodo);
    }
   
   const handelDeleteTodo=(index)=>{
    let dltTodo=[...allTodos];
    dltTodo.splice(index, 1);
    setTodos(dltTodo)
   }

  return (
    <div>
        <div className='container'>
            <div id='box1'>
                <label>Title</label>
                <input type='text' id='title' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            </div>
            <div id='box2'>
                <label>Description</label>
                <input type='text' id='Description' value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} />
            </div>

        </div>
        <button id='add' onClick={handleAddTodo}>Add</button>
        <div id='list'><h3>Todos</h3>
           {allTodos.map((item,index)=>{
            return(
                <div id='list-item' style={{display: "flex"}} key={index}>
                <div  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    
                </div>
                <button style={{ border: "none"}} id='dlt'onClick={()=>handelDeleteTodo(index)} >❌</button>
            </div>
            )
           })}
        </div>
    </div>
  )
}

export default Todo