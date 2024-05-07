import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-color-1: ${({ theme }) => theme["--bg-color-1"]};
  --bg-color-2: ${({ theme }) => theme["--bg-color-2"]};
  --bg-color-3: ${({ theme }) => theme["--bg-color-3"]};
  --bg-color-4: ${({ theme }) => theme["--bg-color-4"]};
  --shadow-color-1: ${({ theme }) => theme["--shadow-color-1"]};
  /* --bg-color-onHover-1: rgb(243, 241, 243);
  --bg-colo-onHover-2: rgb(235, 234, 234); */
  --text-color-1: ${({ theme }) => theme["--text-color-1"]};
  --text-color-2: ${({ theme }) => theme["--text-color-2"]};
  --accent-color: ${({ theme }) => theme["--accent-color"]};
}

& #root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

/* & .task-tile:hover {
  background-color: var(--bg-color-1);
} */

& footer {
  height: 8%;  
  width : 100%;
}
`

export default GlobalStyles