import styled from "styled-components";

const StyledSignIn = styled.div`
padding: 1.5rem 2rem;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: var(--text-color-1);
background-color: var(--bg-color-2);

& .form-wrapper {
  padding: .5rem;
  height: 75%;
  width: 50%;
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

& .form-wrapper form {
  width: 100%;
  height: 77%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
}

& .form-wrapper form .submission-error {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
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

& .form-wrapper form .options {
  margin-top: .5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

& #signInBtn {
  padding: .5rem;
  width: 50%;
  font-size: 1.2rem;
  color: var(--text-color-1);
  background-color: transparent;
  border: 1px solid var(--text-color-1);
  cursor: pointer;
}

& #signInBtn:hover {
  background-color: var(--bg-color-1);
}

& .form-wrapper form .options .signup {
  margin-top: .2rem;
}

& .form-wrapper form .options .signup span {
  font-size: .8rem;
  color: var(--text-color-1);
}

& .form-wrapper form .options .signup a {
  font-size: 1rem;
  font-weight: bold;
  color: var(--accent-color);
  text-decoration: none;
}

@media (max-width: 768px) {
  & .form-wrapper {
    height: 80%;
    width: 90%;
  }

  & .form-wrapper .heading span {
    font-size: 1.5rem;
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

  & #signInBtn {
    font-size: 1rem;
  }

  & .form-wrapper form .options .signup span {
    font-size: .7rem;
  }

  & .form-wrapper form .options .signup a {
    font-size: .9rem;
  }
}
`

export default StyledSignIn