import { v4 as uuidv4 } from 'uuid';
import { TextField, Button } from '@mui/material';
import { useState, memo } from 'react';

import './TodoCreate.css'
import { Todo } from '../../models/Todo';

const TodoCreate = ({ addTodo }: { addTodo: (todo: Todo) => void }) => {

    const [text, setText] = useState('');

    const handleTodoCreate = () => {
        if (text.length > 0) {
            const todo = new Todo({ title: text, id: uuidv4() })
            addTodo(todo)
            setText('')
        }
    }

    return (
        <div className='todo-create-container'>
            <TextField fullWidth
                value={text}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setText(event.target.value);
                }}
            />
            <Button
                variant="outlined"
                disabled={text.length === 0} onClick={handleTodoCreate}>Add</Button>
        </div>
    )
}

export default memo(TodoCreate)