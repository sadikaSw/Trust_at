import { useState, useEffect } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { PageHero } from "../components";
import { useGlobalContext } from "../context/user_context";
import FormRow from "../components/FormRow";
import logo from "../assets/logo.png";
import Bounce from "react-reveal/Bounce";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
  });

  const { user, register, login, isLoading, showAlert } = useGlobalContext();
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (isMember) {
      login({ email, password });
    } else {
      register({ name, email, password });
    }
  };

  return (
    <>
      <PageHero title="register" />
      {user && <Navigate to="/" />}
      <Bounce bottom>
        <Wrapper className="page full-page">
          <div className="container">
            {showAlert && (
              <div className="alert alert-danger">
                there was an error, please try again
              </div>
            )}
            <form className="form" onSubmit={onSubmit}>
             
              <div className="title">
                <h4>{values.isMember ? "Log in" : "Sign up"}</h4>
                <div className="underline"></div>
              </div>
              {/* name field */}
              {!values.isMember && (
                <FormRow
                  type="name"
                  name="name"
                  value={values.name}
                  handleChange={handleChange}
                />
              )}

              {/* single form row */}
              <FormRow
                type="email"
                name="email"
                value={values.email}
                handleChange={handleChange}
              />
              {/* end of single form row */}
              {/* single form row */}
              <FormRow
                type="password"
                name="password"
                value={values.password}
                handleChange={handleChange}
              />
              {/* end of single form row */}
              <center><button
                type="submit"
                className="btn btn-block"
                disabled={isLoading}
              >
                {isLoading ? "Loading User..." : "Submit"}
              </button></center>
              {!values.isMember && (
                <p>By clicking the "Submit" button, you are creating an account, and agree to Trust@' Terms of Service and Privacy Policy</p>
                
              )}
             


              <p>
                <div className="reg">
                  <b>
                    {values.isMember
                      ? "Need an account??"
                      : "Already have an account?"}
                  </b>
                </div>
                <br />
                <button
                  type="button"
                  onClick={toggleMember}
                  className="member-btn"
                >
                  <b>{values.isMember ? "Sign up" : "Log in"}</b>
                </button>
              </p>
            </form>
          </div>
        </Wrapper>
      </Bounce>
    </>
  );
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  min-height: 120vh;

  h4 {
    color: var(--clr-black);
    line-height: 3rem;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  .reg {
    margin-left: 1rem;
    text-decoration: underline;
  }
  .title {
    margin-bottom: 3rem;
  }
  /* alerts */
  .alert {
    padding: 0.375rem 0.75rem;
    margin: 0 auto;
    border-color: transparent;
    border-radius: var(--borderRadius);
    width: var(--fluid-width);
    max-width: var(--fixed-width);
    text-align: center;
    text-transform: capitalize;
  }
  .alert-danger {
    color: white;
    background: red;
    border-radius: 20px;
  }
  .alert-success {
    color: var(--green-dark);
    background: var(--green-light);
  }

  /* form */
  .form {
    width: 50vw;
    max-width: 1120px;
    background: #F9F5EB;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    border-radius: 20px;
  }
  .form-label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-5);
    border-radius: 20px;
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    /* color: var(--grey-400) !important; */
    letter-spacing: var(--letterSpacing);
  }
  .form-alert {
    color: var(--red-dark);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
  }

  /* alert */
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid var(--clr-primary-7);
    border-radius: 50%;
    border-top-color: var(--clr-primary-5);
    animation: spinner 0.6s linear infinite;
    margin: 0 auto;
  }
  .loading {
    margin: 0 auto;
  }

  /* title */
  .title {
    text-align: center;
  }

  .title-underline {
    background: var(--clr-primary-3);
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: -1rem;
  }
  .page {
    width: 50vw;
    max-width: 1120px;
    margin: 0 auto;
  }
  .full-page {
    min-height: 200vh;
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    width: 200px;
    height: 150px;
  }
  .form {
    max-width: 400;
    border-top: 5px solid var(--clr-grey-2);
  }

  h4 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: 1px #607EAA;
    color: var(--clr-primary-4);
    cursor: pointer;
    font-size:1.5rem;
  }
`;

export default Register;
