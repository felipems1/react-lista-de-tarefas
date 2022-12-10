import { useParams, useNavigate } from "react-router-dom";

import * as C from "./styles";

import Button from "../Button";

export const TaskDetails = () => {
  const navigate = useNavigate();

  const params = useParams();

  const handleTaskBack = () => {
    navigate("/");
  };

  return (
    <>
      <C.Button_Container>
        <Button onClick={handleTaskBack}>Voltar</Button>
      </C.Button_Container>
      <C.Details_Container>
        <C.Title>{params.taskTitle}</C.Title>
        <C.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          temporibus ex velit! Reiciendis, assumenda neque.
        </C.Description>
      </C.Details_Container>
    </>
  );
};

export default TaskDetails;
