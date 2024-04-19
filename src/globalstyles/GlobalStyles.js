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
  width: 35%;
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
  /* height: 43%; */
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
  /* height: 57%; */
}

& .main .navbar .projects #addNewProjectBtn {
  margin: 0.5rem 0 0.4rem 0;
  align-items: center;
  justify-content: flex-start;
}

& .main .navbar .projects .project-tile {
  flex-direction: column;
  justify-content: center;
}

& .main .content-panel {
  width: 65%;
  height: 100%;
  background-color: rgb(236, 236, 236);
  overflow: scroll;
}

& footer {
  height: 8%;  
  width : 100%;
}
`

export default GlobalStyles