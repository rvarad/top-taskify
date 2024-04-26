import styled from "styled-components";

const StyledContentPanel = styled.div`
padding: 1.5rem 2rem;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 75%;
height: 100%;
background-color: rgb(236, 236, 236);

& .current-tab-heading {
  padding: 1.5rem;
  margin-bottom: .5rem;
  height: 23%;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  background-color: #2abd67;
}

& .current-tab-heading span {
  color: white;
  font-size: 2rem;
}

& #addNewTaskBtn {
  padding: .5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}

& #addNewTaskBtn:hover {
  background-color: rgb(254, 252, 254);
}

& #addNewTaskBtn svg {
  width: 2rem;
  margin-right: .5rem;
}

& #addNewTaskBtn span {
  font-size: 1rem;
}

& .task-list {
  padding: .5rem 0;
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}

& #overlay {
  visibility: ${({ $overlayState }) => ($overlayState ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.418);
  box-shadow: inset rgba(0, 0, 0, 0.74) 1px 1px 40px 0px;
}
`

export default StyledContentPanel