import styled from "styled-components";

const StyledTaskForm = styled.form`
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
  position: relative;
  margin-bottom: .2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

& .input-wrapper .errors {
  position: absolute;
  font-size: .7rem;
  top: 10%;
  left: 48%;
  background-color: red;
  color: white;
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

& .task-form_input-details-wrapper {
  height: 40%;
}

& .task-form_input-details-wrapper textarea {
  height: 100%;
}

& .task-form_input-due-date-wrapper {
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
}

& #taskForm_inputDueDate {
  width: auto;
  color: rgb(22, 22, 22);
}

& .input-wrapper.task-form_input-priority-wrapper{
  height: 9%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
}

& .input-wrapper.task-form_input-priority-wrapper input {
  /* margin: 0;
  padding: 0;
  position: relative;
  left: .1rem;
  width: .1rem;
  height: .1rem; */
  display: none;
}

& .input-wrapper.task-form_input-priority-wrapper label {
  margin-right: 1rem;
  padding: 0.1rem 0;
  width: 18%;
  font-size: .9rem;
  font-weight: 600;
  text-align: center;
  border: 2px solid;
  border-radius: 10px;
}

& .input-wrapper.task-form_input-priority-wrapper #lowPriorityInputLabel {
  border-color: green;
  background-color: ${({ $priority }) => $priority === "low" ? "green" : "none"};
  color: ${({ $priority }) => $priority === "low" ? "white" : "green"};
}

& .input-wrapper.task-form_input-priority-wrapper #mediumPriorityInputLabel {
  border-color: orange;
  background-color: ${({ $priority }) => $priority === "medium" ? "orange" : "none"};
  color: ${({ $priority }) => $priority === "medium" ? "white" : "orange"};
}

& .input-wrapper.task-form_input-priority-wrapper #highPriorityInputLabel {
  border-color: red;
  background-color: ${({ $priority }) => $priority === "high" ? "red" : "none"};
  color: ${({ $priority }) => $priority === "high" ? "white" : "red"};
}

& .task-form_btns-wrapper {
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

& .task-form_btns-wrapper button {
  width: 10%;
  height: 70%;
  background-color: transparent;
  border: none;
}

& .task-form_btns-wrapper button svg {
  height: 100%;
}

& .task-form_btns-wrapper #taskForm_inputCancelBtn svg {
  fill: red;
}

& .task-form_btns-wrapper #taskForm_inputSubmitBtn svg {
  fill: green;
}
`

export default StyledTaskForm