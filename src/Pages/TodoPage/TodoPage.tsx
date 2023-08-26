import { memo } from "react"

import { TodoCreate } from "../../components/TodoCreate"
import { TodoList } from "../../components/TodoList"
import { Todo } from "../../models/Todo"

const TodoPage = ({ todos, addTodo, removeTodo, updateTodo }: { todos: Todo[], addTodo: (todo: Todo) => void, removeTodo: (id: string) => void, updateTodo: (todo: Todo) => void }) => {

    return (
        <>
            <TodoCreate addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
        </>
    )
}

export default memo(TodoPage)