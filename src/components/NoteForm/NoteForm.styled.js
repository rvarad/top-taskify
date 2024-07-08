import styled from "styled-components";

const StyledNoteForm = styled.form`
padding: 1rem;
height: 60%;
width: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
background-color: var(--bg-color-1);
border-radius: 1.5rem;

/* & .input-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
} */

& .input-wrapper {
  position: relative;
  margin-bottom: .2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

& .input-wrapper .errors {
  position: absolute;
  font-size: .7rem;
  top: 7%;
  left: 48%;
  background-color: red;
  color: white;
}

& .input-wrapper label {
  font-size: 1rem;
  color: var(--text-color-1);
}

& .input-wrapper input, .input-wrapper textarea {
  margin-top: .1rem;
  padding: 0.2rem .4rem;
  width: 100%;
  font-size: 1.1rem;
  background-color: transparent;
  border: 1px solid var(--text-color-1);
  color: var(--text-color-1);
}

/* & .input-wrapper input, .input-wrapper textarea {
  margin-top: .1rem;
  padding: 0.2rem .4rem;
  width: 100%;
  font-size: 1.1rem;
  color: var(--text-color-1);
  background-color: transparent;
  border: 1px solid var(--text-color-1);
} */

/* & .input-wrapper label {
  color: var(--text-color-1);
  font-size: 1rem;
}

& .input-wrapper .errors {
  position: absolute;
  font-size: .7rem;
  right: 0;
  top: 5px;
  background-color: red;
  color: white;
} */

& .noteForm_title {
  margin-bottom: .2rem;
  height: 20%;
}

& .noteForm_content {
  height: 65%;
}

& .noteForm_content textarea {
  height: 90%;
}

& .note-form_btns-wrapper {
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

& #noteForm_inputSubmitBtn, #noteForm_inputCancelBtn {
  /* width: 10%; */
  height: 70%;
  background-color: transparent;
  border: none;
}

& #noteForm_inputSubmitBtn svg, #noteForm_inputCancelBtn svg {
  height: 100%;
}

& #noteForm_inputSubmitBtn svg {
  fill: green;
}

& #noteForm_inputCancelBtn svg {
  fill: red;
}

@media (max-width:768px) {
  height: 70%;
}
`

export default StyledNoteForm