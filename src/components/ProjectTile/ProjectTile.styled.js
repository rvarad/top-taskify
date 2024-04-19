import styled from "styled-components";

const StyledProjectTile = styled.div`
& .project-info {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

& div svg {
  width: 2rem;
  margin-right: 0.5rem;
  fill: rgb(55, 73, 88);
}

& div .project-name {
  font-size: 1.12rem;
}

& .project-options {
  padding: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

& .project-options button {
  padding: 0.2rem 0;
  width: 40%;
  font-size: 0.8rem;
}
`

export default StyledProjectTile