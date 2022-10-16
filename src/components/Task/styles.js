import styled from 'styled-components';

export const Container = styled.div`
    background-color: #444;
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    color: #EEE;
    align-items: center;
    cursor: pointer;
    border-left: ${props=>props.small ? '6px solid chartreuse' : ''};
`;

export const Task_Title = styled.div`
    cursor: pointer;
`;

export const Buttons_Container = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
`;

export const Button_Remove = styled.button`
    background-color: #444;
    border: none;
    font-size: 24px;
    color: chartreuse;
    cursor: pointer;
    margin: 0 5px;
`;

export const Button_Details = styled.button`
    background-color: #444;
    border: none;
    font-size: 24px;
    color: chartreuse;
    cursor: pointer;
    margin: 0 5px;
`;