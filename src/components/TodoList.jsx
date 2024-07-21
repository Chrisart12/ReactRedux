import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = (props) => {

    const tasks = useSelector((state) => state.todo);

    console.log("eeeeeeeeeee")

    return (
        <>
            {tasks.map((t) => (
                <TodoItem task={t} key={t.id} />
            ))}
        </>
    );
};

export default TodoList;
