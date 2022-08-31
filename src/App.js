import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, onSnapshot, query, updateDoc,doc, addDoc, deleteDoc } from 'firebase/firestore';
import Todos from './Todos';
import { AiOutlinePlus } from "react-icons/ai";


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#d946ef] to-[#701a75]`,
  container: `bg-slate-300 max-w-[500px] w-full m-auto rounded-md p-4 shadow-2xl`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `w-full border p-2 text-xl`,
  button: `border p-4 bg-gradient-to-r from-[#d946ef] to-[#a21caf] text-white`,
  text: `text-center text-xl text-gray-600 p-4`
}

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // Create Todo
 const createTodo = async (e) => {
  e.preventDefault(e);
  
  if(input === ''){
    alert('Please enter a valid todo')
  }
   else{
    await addDoc(collection(db, 'todos'),{
      text: input,
      isCompleted: false
    })
    setInput('')
   }
 }

  // Read todos from Firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot)=> {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    })
    return () =>  unsubscribe();
  }, [])

  // Update Todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id) ,{
      isCompleted: !todo.isCompleted
    })
  }

  // Delete Todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id) )
  }

  return (
    <div className={style.bg}>
    <div className={style.container}>
      <h1 className={style.heading}> Todo App</h1>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type='text' placeholder="Add todo" />
          <button className={style.button}><AiOutlinePlus size={30}  className="hover:scale-150 duration-100" /></button>
        </form>
        <ul>
          {todos.map((todo, index) => {
           return(
            <Todos key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
           )
          })}
        </ul>
        <p className={style.text}> There are {todos.length} Todos</p>
    </div>
    </div>
  );
}

export default App;
