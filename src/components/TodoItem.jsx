import { useDispatch } from "react-redux";
// import { toggleTask, deleteTask } from './redux'
import { deleteTask, toggleTask } from '../redux/todo/todoAction'
import Delete from './icons/Delete'

const TodoList = (props) => {
    const { task } = props;

    const dispatch = useDispatch()

    return (
        <div>
        <label>
            <input
            type="checkbox"
            checked={task.done}
            onChange={() => dispatch(toggleTask(task.id))}
            />
            {task.text}

            <span
            onClick={() => dispatch(deleteTask(task.id))}
            role="button"
            style={{ padding: "5px", marginLeft: "20px" }}
            >
            X
            </span>
        </label>
        </div>
    );
};

export default TodoList;
