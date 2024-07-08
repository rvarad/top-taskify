import styled from "styled-components";

const StyledAccountPage = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: var(--text-color-1);
background-color: var(--bg-color-2);

& .form-wrapper {
  padding: 1.5rem 2rem .5rem 2rem;
  height: 90%;
  width: 90%;
  /* overflow: scroll; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid white; */
}

& .form-wrapper .heading {
  padding: 1.5rem;
  margin-bottom: .5rem;
  height: 23%;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  background-color: var(--accent-color);
}

& .form-wrapper .heading span {
  font-size: 2rem;
  color: white;
}

& .form-wrapper .account-info-wrapper {
  padding: 0 2rem;
  height: 77%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 10%;
}

& .form-wrapper .profile-picture {
  position: relative;
  height: 12rem;
  width: 12rem;
  /* background-color: white; */
  border: 1px solid white;
  border-radius: 50%;
}

& .form-wrapper img {
  /* display: block; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

& .form-wrapper .account-info-wrapper .profile-picture .profile-picture-label {
  position: absolute;
  bottom: .5rem;
  right: .5rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color-2);
  border: 1px solid var(--text-color-1);
  border-radius: 50%;
}

& .form-wrapper .account-info-wrapper .profile-picture .profile-picture-label svg {
  height: 1.5rem;
}

& .form-wrapper .account-info-wrapper .profile-picture .profile-picture-label svg path {
  fill: var(--text-color-1);
}

& .form-wrapper .account-info-wrapper .profile-picture #profilePictureInput {
  display: none;
}

& .form-wrapper .account-info-wrapper .profile-picture .uploadProfilePicOptions {
  position: absolute;
  bottom: -25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

& .form-wrapper .account-info-wrapper .profile-picture #profilePictureUploadBtn, .form-wrapper .account-info-wrapper .profile-picture #profilePictureUploadCancelBtn {
  height: 2.5rem;
  width: 6rem;
  color: var(--text-color-1);
  background-color: transparent;
  border: 1px solid var(--text-color-1);
  border-radius: 5px;
}

& .form-wrapper form {
  position: relative;
  padding: 1rem 1.5rem;
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: ${({ $formEdit }) => (!$formEdit ? "1px solid var(--text-color-1)" : "none")};
}

& .form-wrapper form .submission-error {
  width: 100%;
  height: 10%;
  text-align: center;
  color: red;
}

& .form-wrapper form .input-wrapper {
  position: relative;
  padding: .4rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

& .form-wrapper form .input-wrapper label {
  font-size: 1.12rem;
  color: var(--text-color-1);
}

& .form-wrapper form .input-wrapper input {
  padding: .5rem;
  margin-top: .5rem;
  width: 100%;
  font-size: 1.2rem;
  color: var(--text-color-1);
  background-color: transparent;
  border: 1px solid var(--text-color-1);
}

& .form-wrapper form .input-wrapper .errors {
  position: absolute;
  top: .6rem;
  right: .1rem;
  font-size: .9rem;
  background-color: red;
  color: white;
}

& .form-wrapper form #editIcon {
  position: absolute;
  top: -.9rem;
  right: -.9rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-2);
  border: 1px solid var(--text-color-1);
  border-radius: 50%;
}

& .form-wrapper form #editIcon svg {
  height: 1.5rem;
  width: 2rem;
  stroke: var(--text-color-1);
  cursor: pointer;
}

& .form-wrapper form #saveButton {
  margin-top: .3rem;
  background-color: transparent;
  border: none;
}

& .form-wrapper form #saveButton svg {
  height: 2rem;
  fill: green;
  cursor: pointer;
}

@media (max-width: 768px) {
  & .form-wrapper .heading {
    margin-bottom: 1rem;
  }

  & .form-wrapper .heading span {
    font-size: 1.5rem;
  }

  & .form-wrapper .account-info-wrapper {
    padding: 0 1rem;
    width: 100%;
    height: 77%;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 5%;
  }

  & .form-wrapper form {
    width: 100%;
    height: 100%;
  }

  & .form-wrapper .profile-picture {
    height: 10rem;
    width: 10rem;
    border-radius: 0;
  }

  & .form-wrapper .profile-picture img {
    border-radius: 0;
  }

  & .form-wrapper .account-info-wrapper .profile-picture .profile-picture-label {
    bottom: .2rem;
    right: .2rem;
    height: 1.6rem;
    width: 1.6rem;
  }

  & .form-wrapper .account-info-wrapper .profile-picture .profile-picture-label svg {
    height: 1.2rem;
  }

  & .form-wrapper .account-info-wrapper .profile-picture .uploadProfilePicOptions {
    bottom: 5%;
    left: 135%;
    gap: .5rem;
    flex-direction: column;
  }

  & .form-wrapper .account-info-wrapper .profile-picture #profilePictureUploadBtn, .form-wrapper .account-info-wrapper .profile-picture #profilePictureUploadCancelBtn {
    height: 2.3rem;
    width: 4.5rem;
    font-size: .7rem;
  }

  & .form-wrapper form .input-wrapper label {
    font-size: .9rem;
  }

  & .form-wrapper form .input-wrapper input {
    font-size: 1rem;
  }

  & .form-wrapper form .input-wrapper .errors {
    font-size: .7rem;
  }

  & .form-wrapper form #saveButton svg {
    height: 1.5rem;
  }
}
`

export default StyledAccountPage
