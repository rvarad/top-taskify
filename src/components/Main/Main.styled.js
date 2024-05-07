import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height:80%;
  width : 100%;

& .navbar {
  width: 25%;
  height: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;

  background-color: var(--bg-color-1);
  color: var(--text-color-1);
  border-right: 1px solid var(--accent-color);
}

& .navbar .home {
  width: 100%;
  height: 50%;
}

& .navbar .home h2, .navbar .projects h2 {
  padding-bottom: 0.6rem;
  border-bottom: solid 2px var(--text-color-1);
}

& .navbar .nav-btn {
  margin: 0.25rem 0;
  padding: 0.3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.12rem;
  color: var(--text-color-1);
  cursor: pointer;
}

& .navbar .nav-btn:hover {
  background-color: var(--bg-color-2);
}

& .navbar .nav-btn.active {
  border-left: 3px solid var(--accent-color);
  background-color: rgba(42, 189, 103, 0.439);
}

& .navbar .nav-btn svg  {
  width: 2rem;
  margin-right: 0.5rem;
}

& .navbar .projects {
  width: 100%;
  height: 50%;
  overflow-y: scroll;
}

& .navbar .projects h2 {
  position: sticky;
  top: 0;
  background-color: var(--bg-color-1);
}

& .navbar .projects #addNewProjectBtn {
  margin: 0.5rem 0 0.4rem 0;
  align-items: center;
  justify-content: flex-start;
}

& .navbar .projects #addNewProjectBtn svg path {
  fill: var(--text-color-1);
}

& .navbar .projects .add-new-project-form {
  margin-top: .1rem;
  padding: 0.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
}

& .navbar .projects .add-new-project-form input {
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
  background-color: transparent;
  color: var(--text-color-1);
  border: 2px solid var(--text-color-1);
}

& .navbar .projects .add-new-project-form .add-new-project-form-buttons {
  padding: .3rem .5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

& .navbar .projects .add-new-project-form .add-new-project-form-buttons button {
  width: 15%;
  background-color: transparent;
  border: none;
}

& .navbar .projects .add-new-project-form .add-new-project-form-buttons button svg {
  width: 100%;
}

& .navbar .projects .add-new-project-form .add-new-project-form-buttons #addNewProjectForm_inputSubmitBtn {
  fill: green;
}

& .navbar .projects .add-new-project-form .add-new-project-form-buttons #addNewProjectForm_inputCancelBtn {
  fill: red;
}
`

export default StyledMain