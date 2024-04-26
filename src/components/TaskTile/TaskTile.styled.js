import styled from "styled-components";

const StyledTaskTile = styled.div`
padding: .2rem .1rem;
margin-bottom: .5rem;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
color: #374958;
border: 1px solid #374958;

& .task_status {
  margin: 0 .5rem;
  height: 100%;
  width: 1.3rem;
}

& .task_title {
  width: 35%;
  font-size: 1.2rem;
}

& .task_details-btn {
  height: 100%;
  width: 2rem;
}

& .task_due-date {
  padding: 0 .5rem;
  width: 20%;
  text-align: center;
  font-size: .9rem;
}

& .task_important, .task_edit, .task_delete {
  height: 100%;
  width: 10%;
  text-align: center;
}

& .task_important svg, .task_edit svg, .task_delete svg {
  height: 100%;
  width: 2rem;
}
`

export default StyledTaskTile