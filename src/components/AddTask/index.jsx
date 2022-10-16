import React, { useState } from 'react';

import * as C from './styles';
import Button from '../Button';

const AddTask = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData( e.target.value );
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    };

    return (
        <C.Container>
            <C.Input 
                onChange={handleInputChange} 
                value={inputData}
                type='text' 
            />
            <C.Button_Container>
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </C.Button_Container>
        </C.Container>
    );
}

export default AddTask;