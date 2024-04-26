import styled from "styled-components";

const StyledTaskDetails = styled.div`
padding: 1rem;
width: 60%;
height: 50%;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
font-size: 1.1rem;
background-color: #0000008f;
color: rgb(236, 236, 236);
border-radius: 1.5rem;

& .task-details-popup_content {
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: column;
}

& .task-details-popup_task-title {
  margin: .5rem 0;
  font-size: 1.2rem;
  font-weight: bold;
}

& .task-details-popup_category {
  margin: .3rem 0;
  display: flex;
  flex-direction: row;
}
 
& .task-details-popup_category-title {
  width: 30%;
}

& .task-details-popup_category-content {
  width: 70%;
}

& .task-details-popup_details {
  height: 40%;
}

& .task-details-popup_details .task-details-popup_category-content {
  overflow-y: scroll;
  word-wrap: break-word;
}

& .task-details-popup_close-btn {
  width: 5%;
  height: 8%;
  cursor: pointer;
}

& .task-details-popup_close-btn svg {
  fill: red;
}
`

export default StyledTaskDetails