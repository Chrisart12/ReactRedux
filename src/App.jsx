import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
// import { Provider } from "react-redux";


function App() {


  return (
    // <Provider store={store}>
    <>
      <AddTodo />
      <div className="text-3xl font-bold underline mt-8">
        La liste des tâches
      </div>
      <div className="card">
        <TodoList />
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
      </>
    // </Provider>
  )
}

export default App
