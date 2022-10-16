import React from 'react';
import { useNavigate } from "react-router-dom";
import { CgClose, CgInfo } from 'react-icons/cg';

import * as C from './styles';

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
 
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    }

    return ( 
        <C.Container small={task.completed}>
            <C.Task_Title onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </C.Task_Title>
            <C.Buttons_Container>
                <C.Button_Remove onClick={() => handleTaskRemove(task.id)}>
                    <CgClose />
                </C.Button_Remove>
                <C.Button_Details onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </C.Button_Details>
            </C.Buttons_Container>
        </C.Container>  
    );
}

export default Task;