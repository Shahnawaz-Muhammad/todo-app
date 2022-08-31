import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const style ={
    list: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    listComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `flex text-center cursor-pointer hover:scale-125 duration-100	`
}

const Todos = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.isCompleted ? style.listComplete : style.list} >
        <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} className={style.input} type="checkbox" checked={todo.isCompleted ? 'checked' : ''} />
            <p onClick={() => toggleComplete(todo)} className={todo.isCompleted ? style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className={style.button}><FaRegTrashAlt size={20} /></button>
    </li>
  )
}

export default Todos