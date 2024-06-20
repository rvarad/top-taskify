import styled from "styled-components";

const StyledFooter = styled.footer`
width: 100%;
height: 8%;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--bg-color-3);

& .footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
}

& .credits a {
  font-size: larger;
  color: yellow;
  text-decoration: none;
}
`

export default StyledFooter