import styled from "styled-components";

const StyledHeader = styled.header`
z-index: 1;
padding: .5rem 1.5rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width : 100%;
height: 12%;
color: var(--text-color-1);
background-color: var(--bg-color-3);
box-shadow: 0 5px 5px -3px var(--accent-color);

& .left {
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
}

& .left .logo {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

& .left .logo .image {
  margin-right: 1rem;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-color);
  border-radius: 50%;
}

& .left .logo .image svg {
  height: 3rem;
}

& .left .logo .text {
  font-size: 1.5rem;
  font-weight: 600;
}

& .middle {
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
}

& .middle a {
  padding: 0.3rem .5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--text-color-1);
  }
  
& .middle a.active {
  font-size: 1.125rem;
  background-color: var(--accent-color);
  border: 1px solid var(--accent-color);
}

& .right {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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

& .right #signInBtn {
  padding: .5rem .7rem;
  font-size: 1.12rem;
  font-weight: 600;
  color: var(--accent-color);
  background-color: transparent;
  border: 1px solid var(--text-color-1);
  cursor: pointer;
}

& .right #signInBtn:hover {
  background-color: var(--bg-color-1);
}

& .mini-account {
  position: relative;
  margin-left: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

& .mini-account .mini-profile-pic {
  padding: .1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

& .mini-account .mini-profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

& .mini-account .mini-profile-pic svg {
  width: 100%;
}

& .mini-account .profile-popup {
  position: absolute;
  z-index: 1;
  top: 3rem;
  right: 1.5rem;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-color-1);
  box-shadow: 0px 7px 29px 0px var(--shadow-color-1);
}

& .mini-account .profile-popup .greeting {
  width: 100%;
  height: 25%;
  font-size: 1.12rem;
  text-align: center;
}

& .mini-account .profile-popup .options {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

& .mini-account .profile-popup .options button {
  background-color: transparent;
}

& .profile-popup #accountBtn {
  padding: .1rem;
  font-size: .9rem;
  font-weight: 600;
  color: var(--text-color-1);
  border: 1px solid var(--text-color-1);
  border-radius: 50px;
}

& .profile-popup #accountBtn:hover, .profile-popup #signOutBtn:hover {
  background-color: var(--bg-color-3);
}

& .profile-popup #signOutBtn {
  padding: .1rem;
  width: 60%;
  font-size: .9rem;
  font-weight: 600;
  color: red;
  border: 1px solid red;
  border-radius: 50px;
}
`

export default StyledHeader