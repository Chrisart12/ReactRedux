import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todo/todoAction"

export default function AddTodo() {

  const [task, setTask ]= useState('')

  const dispatch = useDispatch()

  const handdleSubmint = (e) => {
    e.preventDefault()

    dispatch(addTask(task))

    setTask('')
  }


  return (
    <div>

        <form className="max-w-sm mx-auto" onSubmit={handdleSubmint}>
            <div className="mb-5">
                <label htmlFor="task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your task</label>
                <input type="text" id="task" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="task" 
                required 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />
            </div>
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    </div>
  )
}
