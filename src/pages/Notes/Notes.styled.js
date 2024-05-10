import styled from "styled-components"

const StyledNotes = styled.div`
position: relative;
padding: 1.5rem 2rem;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--bg-color-2);

& .tab-heading {
  padding: 1.5rem;
  margin-bottom: .5rem;
  height: 23%;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  background-color: var(--accent-color);
}

& .tab-heading span {
  font-size: 2rem;
  color: white;
}

& #addNewNoteBtn {
  padding: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: var(--text-color-1);
  cursor: pointer;
}

& #addNewNoteBtn:hover {
  background-color: var(--bg-color-1);
}

& #addNewNoteBtn svg {
  width: 2rem;
  margin-right: .5rem;
}

& #addNewNoteBtn svg path {
  fill: var(--text-color-1);
}

& .overlay {
  visibility: ${({ $overlayState }) => ($overlayState ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-4);
  box-shadow: inset var(--shadow-color-1) 1px 1px 40px 0px;
}

& .notes-grid {
  padding: .5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 49%);
  justify-items: center;
  align-items: center;
  row-gap: 1rem;
  column-gap: 2%;
  overflow-y: scroll;
}
`

export default StyledNotes