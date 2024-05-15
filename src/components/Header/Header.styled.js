import styled from "styled-components";

const StyledHeader = styled.header`
z-index: 1;
padding: 1.5rem;
display: flex;
justify-content: space-between;
align-items: center;
width : 100%;
height: 12%;
color: var(--text-color-1);
background-color: var(--bg-color-3);
box-shadow: 0 5px 5px -3px var(--shadow-color-1);

& .middle {
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
}

& .middle a {
  text-decoration: none;
  color: var(--text-color-1);
}

& .right {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

& .theme-switch {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

& .theme-switch button {
  padding: .3rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  border: none;
}

& .theme-switch button:hover {
  background-color: var(--bg-color-1);
}

& .theme-switch button svg {
  width: 100%;
}

& .theme-switch svg path, .theme-switch svg circle {
  fill: var(--text-color-1);
}

& .theme-switch ul {
  z-index: 1;
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  padding: .5rem 0;
  width: 10rem;
  /* height: 10rem; */
  background-color: var(--bg-color-1);
  box-shadow: 0px 7px 29px 0px var(--shadow-color-1);
}

& .theme-switch ul li {
  list-style: none;
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
}

& .theme-switch ul li input {
  display: none;
}

& .theme-switch ul li label {
  z-index: 2;
  width: 100%;
  padding: .5rem 0.4rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
  cursor: pointer;
  /* border: 1px solid black; */
}

& .theme-switch ul li label:hover {
  background-color: var(--bg-color-3);
  /* background-color: gray; */
}

& .theme-switch ul li label svg {
  width: 1.8rem;
}

& .theme-switch ul li label span {
  color: var(--text-color-1);
  font-size: .9rem;
}
`

export default StyledHeader