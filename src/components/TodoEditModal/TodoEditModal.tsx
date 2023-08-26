import { Modal, TextField, Button, Box, } from '@mui/material';
import { useState } from 'react';
import './TodoEditModal.css'

const TodoEditModal = ({ open, handleClose, handleTodoUpdate, title }: { open: boolean, handleClose: () => void, handleTodoUpdate: (str: string) => void, title: string }) => {

    const [updatedText, setUpdatedText] = useState(title)

    return <>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box className='box'>
                <div className='box-title'>Edit Todo</div>
                <TextField fullWidth
                    value={updatedText}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUpdatedText(event.target.value);
                    }}
                />
                <Button className='box-button' disabled={updatedText.length === 0} variant="outlined" onClick={() => handleTodoUpdate(updatedText)}>Save</Button>
            </Box>
        </Modal>
    </>;
};

export default TodoEditModal;