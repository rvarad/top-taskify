import styled from "styled-components";

const StyledTasks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width : 100%;

& .navbar {
  width: ${({ $navExpanded }) => $navExpanded ? "25%" : "10%"};
  height: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color-1);
  color: var(--text-color-1);
}

& .navbar .home {
  width: 100%;
  height: 50%;
  overflow: scroll;
}

& .navbar .home .heading {
  position: sticky;
  top: 0;
  padding-bottom: .6rem;
  display: flex;
  flex-direction: row;
  justify-content: ${({ $navExpanded }) => ($navExpanded ? "space-between" : "center")};
  border-bottom: solid 2px var(--text-color-1);
  width: 100%;
  background-color: var(--bg-color-1);
}

& .navbar #retractNavbarBtn {
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

& .navbar #retractNavbarBtn svg g {
  fill: var(--text-color-1);
}

& .navbar .projects h2 {
  padding-bottom: 0.6rem;
  width: 100%;
  border-bottom: solid 2px var(--text-color-1);
}

& .navbar .nav-btn {
  margin: 0.25rem 0;
  padding: 0.3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $navExpanded }) => ($navExpanded ? "flex-start" : "center")};
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
  width: ${({ $navExpanded }) => $navExpanded ? "2rem" : "2.5rem"};
  margin-right: 0.5rem;
}

& .navbar .nav-btn span {
  display: ${({ $navExpanded }) => $navExpanded ? "block" : "none"};
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

@media (max-width: 768px) {
  height: 200%;
  height: ${({ $navExpanded }) => $navExpanded ? "200%" : "100%"};
  flex-direction: column;

  & .navbar {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  & .navbar .projects .add-new-project-form .add-new-project-form-buttons button {
    width: 2rem;
    background-color: transparent;
    border: none;
  }
}
`

export default StyledTasks