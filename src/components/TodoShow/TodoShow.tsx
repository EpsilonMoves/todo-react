import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper, IconButton, Tooltip, } from '@mui/material';
import { useState, memo } from 'react'

import { Todo } from "../../models/Todo"
import './TodoShow.css'
import { TodoEditModal } from '../TodoEditModal';

const TodoShow = ({ todo, removeTodo, updateTodo }: { todo: Todo, updateTodo: (todo: Todo) => void, removeTodo: (id: string) => void }) => {
    const [open, setOpen] = useState(false);

    const handleEditClicked = () => setOpen(true);

    const handleClose = () => {
        setOpen(false)
    };

    const handleTodoUpdate = (updatedText: string) => {
        const updatedTodo = new Todo(
            { title: updatedText, id: todo.id, completed: todo.completed }
        )
        updateTodo(updatedTodo)
        setOpen(false)
    }

    const toggleTodo = () => {
        const updatedTodo = new Todo(
            { title: todo.title, id: todo.id, completed: !todo.completed }
        )
        updateTodo(updatedTodo)
    }

    return (
        <>
            <Paper elevation={1} >
                <div className="todo-show-container">
                    <div
                        className={`todo-show-text ${todo.completed ? 'text-line-through' : ''}`}
                        onClick={toggleTodo}
                    >
                        {todo.title}
                    </div>
                    <div className='todo-show-icons'>
                        <Tooltip title="Edit">
                            <IconButton onClick={handleEditClicked}>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton onClick={() =>
                                removeTodo(todo.id)
                            }>
                                <DeleteIcon
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </Paper>
            <TodoEditModal open={open} handleClose={handleClose} handleTodoUpdate={handleTodoUpdate} title={todo.title} />
        </>
    )
}

export default memo(TodoShow)