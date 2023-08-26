import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';

import './Header.css'

const Header = ({ searchTodo }: { searchTodo: (searchString: string) => void }) => {

    const [text, setText] = useState('');

    useEffect(() => {
        searchTodo(text)
    }, [text])

    return (
        <div className="header-container">
            <div className="header-app-name">
                TODO
            </div>
            <TextField
                className='header-search-field'
                label="Search Todo"
                variant="outlined"
                value={text}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setText(event.target.value);
                }}
            />
        </div>
    )
}

export default Header