import styled from "styled-components";

const StyledProjectTile = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;

& svg {
  flex-shrink: 0;
}

& .project-info {
  padding: 0.25rem;
  /* width: 75%; */
  /* min-height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

& .project-info input {
  color: rgb(55, 73, 88);
  padding: 0.25rem;
  width: 100%;
  font-size: 1.12rem;
  border: none;
  background-color: transparent;
  border: ${({ renameProjectState }) => (renameProjectState ? "1px solid black" : "none")};
  cursor: pointer;
}

& .project-info .project-options {
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

& .project-info .project-options button {
  width: 25%;
  color: rgb(55, 73, 88);
  background-color: transparent;
  border: none;  
}

& .project-info .project-options button svg {
  width: 60%;
}

& .project-info .project-options button#submitRenamedProjectBtn svg {
  fill: green;
}

& .project-info .project-options button#cancelRenamedProjectBtn svg {
  fill: red;
}

/* & div svg {
  width: 2rem;
  margin-right: 0.5rem;
  fill: rgb(55, 73, 88);
}

& div .project-name {
  width: 75%;
  font-size: 1.12rem;
}

& .project-options {
  padding: 0.5rem;
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid black;
}

& .project-options button {
  padding: 0.2rem 0;
  width: 40%;
  font-size: 0.8rem;
} */
`

export default StyledProjectTile