import styled from "styled-components";

const StyledProjectTile = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;

& svg.drag-icon {
  flex-shrink: 0;
}

& svg.drag-icon path {
  fill: var(--text-color-1);
}

& .project-info {
  padding: 0.25rem;
}

& .project-info input {
  color: var(--text-color-1);
  padding: 0.25rem;
  width: 100%;
  font-size: 1.12rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

& .project-info .project-options {
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

& .project-info .project-options button {
  width: 25%;
  color: var(--text-color-1);
  background-color: transparent;
  border: none;
}

& .project-info .project-options button svg {
  width: 60%;
}

& .project-info .project-options button#renameProjectBtn svg path, .project-info .project-options button#deleteProjectBtn svg path {
  stroke: var(--text-color-1);
}

& .project-info .project-options button#submitRenamedProjectBtn svg {
  stroke-width: 1px;
  stroke: var(--text-color-1);
  fill: green;
}

& .project-info .project-options button#cancelRenamedProjectBtn svg {
  stroke-width: 1px;
  stroke: var(--text-color-1);
  fill: red;
}

@media (max-width: 768px) {
  & .project-info .project-options button {
    width: 3rem;
    color: var(--text-color-1);
    background-color: transparent;
    border: none;
  }

  & .project-info {
    padding: 0.25rem;
    width: 85%;
  }
}
`

export default StyledProjectTile