import styled from "styled-components";

const StyledAddNewTaskForm = styled.form`
position: relative;
padding: 1rem;
width: 70%;
height: 60%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
font-size: 1.1rem;
background-color: #fffefece;
color: rgb(22, 22, 22);
border-radius: 1.5rem;

& .input-wrapper {
  margin-bottom: .2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

& .input-wrapper label {
  font-size: 1rem;
}

& .input-wrapper input, .input-wrapper textarea {
  margin-top: .1rem;
  padding: 0.2rem .4rem;
  width: 100%;
  font-size: 1.1rem;
  background-color: transparent;
  border: 1px solid rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

& .add-new-task-form_input-details-wrapper {
  height: 40%;
}

& .add-new-task-form_input-details-wrapper textarea {
  height: 100%;
}

& .add-new-task-form_input-due-date-wrapper {
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
}

& #addNewTaskForm_inputDueDate {
  width: auto;
  color: rgb(22, 22, 22);
}

& .input-wrapper.add-new-task-form_input-priority-wrapper{
  height: 9%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
}

& .input-wrapper.add-new-task-form_input-priority-wrapper input {
  /* margin: 0;
  padding: 0;
  position: relative;
  left: .1rem;
  width: .1rem;
  height: .1rem; */
  display: none;
}

& .input-wrapper.add-new-task-form_input-priority-wrapper label {
  margin-right: 1rem;
  padding: 0.1rem 0;
  width: 18%;
  font-size: .9rem;
  font-weight: 600;
  text-align: center;
  border: 2px solid;
  border-radius: 10px;
}

& .input-wrapper.add-new-task-form_input-priority-wrapper #lowPriorityInputLabel {
  border-color: green;
  background-color: ${({ $priority }) => $priority === "low" ? "green" : "none"};
  color: ${({ $priority }) => $priority === "low" ? "white" : "green"};
}

& .input-wrapper.add-new-task-form_input-priority-wrapper #mediumPriorityInputLabel {
  border-color: orange;
  background-color: ${({ $priority }) => $priority === "medium" ? "orange" : "none"};
  color: ${({ $priority }) => $priority === "medium" ? "white" : "orange"};
}

& .input-wrapper.add-new-task-form_input-priority-wrapper #highPriorityInputLabel {
  border-color: red;
  background-color: ${({ $priority }) => $priority === "high" ? "red" : "none"};
  color: ${({ $priority }) => $priority === "high" ? "white" : "red"};
}

& .add-new-task-form_btns-wrapper {
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

& .add-new-task-form_btns-wrapper button {
  width: 10%;
  height: 70%;
  background-color: transparent;
  border: none;
}

& .add-new-task-form_btns-wrapper button svg {
  height: 100%;
}

& .add-new-task-form_btns-wrapper #addNewTaskForm_inputCancelBtn svg {
  fill: red;
}

& .add-new-task-form_btns-wrapper #addNewTaskForm_inputSubmitBtn svg {
  fill: green;
}
`

export default StyledAddNewTaskForm