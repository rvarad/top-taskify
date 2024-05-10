import styled from "styled-components";

const StyledNoteCard = styled.div`
padding: .3rem .5rem;
height: 200px;
width: 100%;
background-color: var(--bg-color-2);
border: 1px solid var(--text-color-1);

&:hover {
  background-color: var(--bg-color-1);
  box-shadow: 0 0 2px 4px var(--shadow-color-1);
}

& .note-title {
  margin-bottom: .2rem;
  height: 15%;
  color: var(--text-color-1);
  font-size: 1.4rem;
}

& .note-content {
  height: 65%;
  width: 100%;
  font-size: 1rem;
  word-wrap: break-word;
  overflow-y: scroll;
  color: var(--text-color-1);
}

& .note-options {
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

& .note-options .note-last-updated {
  width: 80%;
  color: var(--text-color-1);
  font-size: .8rem;
}

& .note-options .note-edit, .note-options .note-delete {
  width: 10%;
}

& .note-options .note-edit svg, .note-options .note-delete svg {
  width: 2rem;
}

& .note-options .note-edit svg path, .note-options .note-delete svg path {
  stroke: var(--text-color-1);
}
`

export default StyledNoteCard