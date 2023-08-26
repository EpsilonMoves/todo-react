import { Todo } from "../../models/Todo";
import { TodoShow } from "../TodoShow";
import './TodoList.css'

const TodoList = ({ todos, removeTodo, updateTodo }: { todos: Todo[], updateTodo: (todo: Todo) => void, removeTodo: (id: string) => void }) => {

    return (
        <div className="todo-list-container">
            {todos.map(todo => (
                <TodoShow key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
            ))}
        </div>
    )
}

export default TodoList