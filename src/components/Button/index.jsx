import React from 'react';

import * as C from './styles';

const Button = ({ children, onClick }) => {
    return (
        <C.Button onClick={onClick}>
            {children}
        </C.Button>
    );
}

export default Button;