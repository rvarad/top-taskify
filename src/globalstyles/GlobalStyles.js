import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body {
} */

& #root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

& header {
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100%;
  height: 12%;
  border-bottom: 1px solid rgb(42, 189, 103);
}

& .main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height:80%;
  width : 100%;
}

& .main .navbar {
  width: 25%;
  height: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;

  background-color: rgb(254, 252, 254);
  color: rgb(55, 73, 88);
  border-right: 1px solid rgb(42, 189, 103);
}

& .main .navbar .home {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
}

& .main .navbar .home h2, .main .navbar .projects h2 {
  padding-bottom: 0.6rem;
  border-bottom: solid 2px rgb(55, 73, 88);
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
  color: rgb(55, 73, 88);
  cursor: pointer;
}

& .navbar .nav-btn:hover {
  background-color: rgb(236, 236, 236);
}

& .navbar .nav-btn svg  {
  width: 2rem;
  margin-right: 0.5rem;
}

& .main .navbar .projects {
  width: 100%;
  height: 50%;
  overflow-y: scroll;
}

& .main .navbar .projects h2 {
  position: sticky;
  top: 0;
  background-color: rgb(254, 252, 254);
}

& .main .navbar .projects #addNewProjectBtn {
  margin: 0.5rem 0 0.4rem 0;
  align-items: center;
  justify-content: flex-start;
}

& .main .navbar .projects .add-new-project-form {
  margin-top: .1rem;
  padding: 0.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
}

& .main .navbar .projects .add-new-project-form input {
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
}

& .main .navbar .projects .add-new-project-form .add-new-project-form-buttons {
  padding: .3rem .5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

& .main .navbar .projects .add-new-project-form .add-new-project-form-buttons button {
  width: 15%;
  background-color: transparent;
  border: none;
}

& .main .navbar .projects .add-new-project-form .add-new-project-form-buttons button svg {
  width: 100%;
}

& .main .navbar .projects .add-new-project-form .add-new-project-form-buttons #addNewProjectForm_inputSubmitBtn {
  fill: green;
}

& .main .navbar .projects .add-new-project-form .add-new-project-form-buttons #addNewProjectForm_inputCancelBtn {
  fill: red;
}

/* & .main .content-panel {
  width: 65%;
  height: 100%;
  background-color: rgb(236, 236, 236);
  overflow: scroll;
} */

& footer {
  height: 8%;  
  width : 100%;
}
`

export default GlobalStyles