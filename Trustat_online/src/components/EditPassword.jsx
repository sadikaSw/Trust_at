import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/user_context";
import { FormRow } from "../components";

function EditPassword() {
  const searchValue = React.useRef("");
  const [state, setState] = useState();
  const { id } = useParams();

  const {
    isLoading,
    editItem,
    fetchSignlePassword,
    singlePasswordError: error,
    user,
    editPassword,
    editComplete,
    showAlert
  } = useGlobalContext();

  const [values, setValues] = useState({
    name: "",
    link: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchSignlePassword(id);
  }, [id]);

  useEffect(() => {
    if (editItem) {
      const { name, link, email, password } = editItem;
      setValues({ name, link, email, password });
    }
  }, [editItem]);

  function generatePassword() {
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    setState(password);
    document.getElementById("password").value = password;
  }

  const searchPassword = () => {
    setState(searchValue.current.value);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, link, email, password } = values;
    if (name && link && email && password) {
      editPassword(id, { name, link, email, password });
    }
  };
  if (isLoading && !editItem) {
    return <div className="loading"></div>;
  }

  if (!editItem || error) {
    return (
      <>
        {!user && <Navigate to="/" />}
        <ErrorContainer className="page">
          <h5 className="alert alert-danger">
            There was an error, please double check your Password ID.
          </h5>

          <Link to="/password" className="btn">
            Products
          </Link>
        </ErrorContainer>
      </>
    );
  }

  return (
    <Wrapper>
      <>
        {!user && <Navigate to="/" />}
        <header>
          <Link to="/password" className="btn btn-block back-home">
            back home
          </Link>
        </header>
        <form onSubmit={handleSubmit}>
          <p className="alert">
            {editComplete && "Success! Edit Complete"}
          </p>
          <h4>
            <u>Update Password</u>
          </h4>
          <h4 className="title">Name : </h4>
          <FormRow
            type="name"
            name="name"
            value={values.name}
            handleChange={handleChange}
            horizontal
            placeholder="Facebook"
            className="input"
          />
          <h4 className="title">URL : </h4>
          <FormRow
            type="name"
            name="link"
            value={values.link}
            handleChange={handleChange}
            horizontal
            placeholder="www.facebook.com"
            className="input"
          />
          <h4 className="title">Email : </h4>
          <FormRow
            type="name"
            name="email"
            value={values.email}
            handleChange={handleChange}
            horizontal
            placeholder="user@gmail.com"
            className="input"
          />
          <h4 className="title">Password : </h4>
          <FormRow
            type="name"
            name="password"
            value={values.password}
            handleChange={handleChange}
            horizontal
            placeholder="*****"
            className="input"
          />
          <h4 className="title">Generated Password : </h4>
          <FormRow
            id="password"
            ref={searchValue}
            onChange={searchPassword}
            type="name"
            name="password"
            horizontal
            className="input"
          />
          <button
            className="butn butn-generate"
            type="button"
            onClick={generatePassword}
          >
            Generate Password
          </button>
          <br />
          <br />
          <button className="butn butn-submit" type="submit">
            {isLoading ? "Editing..." : "Edit"}
          </button>
        </form>
      </>
    </Wrapper>
  );
}

const ErrorContainer = styled.section`
  text-align: center;
  padding-top: 6rem; ;
`;
const Wrapper = styled.section`
  display: grid;
  align-items: center;
  text-align: center;
  min-height: 150vh;
  margin-bottom: 1rem;
  h4 {
    color: var(--clr-black);
    line-height: 3rem;
    font-size: 2rem;
    margin-bottom: 1.5rem;
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
    border-color: #50c050;
    border-radius: 20px;
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
    color: white;
    background: #6ada6a;
  }

  /* form */
  .form {
    width: 90vw;
    max-width: 1120px;
    background: var(--clr-grey-8);
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
    padding: 2rem 2.3rem;
    margin: 3rem auto;
    border-radius: 20px;
  }
  .form-label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .form-input,
  .form-textarea {
    width: 50%;
    padding: 1.3rem 1rem;
    background: var(--clr-grey-9);
    font-size: 1.2rem;
    border: 1px solid var(--clr-grey-5);
    border-radius: 20px;
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .form-textarea {
    height: 3rem;
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
  .butn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-grey-1);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    border-color: transparent;
    box-shadow: 2.8px 2.9px 2.2px rgba(0, 0, 0, 0.031),
      6.7px 6.9px 5.3px rgba(0, 0, 0, 0.044),
      12.5px 13px 10px rgba(0, 0, 0, 0.055),
      22.3px 23.2px 17.9px rgba(0, 0, 0, 0.066),
      41.8px 43.4px 33.4px rgba(0, 0, 0, 0.079),
      100px 104px 80px rgba(0, 0, 0, 0.11);
    border-radius: 1rem;
  }
  .butn:hover {
    color: var(--clr-white);
    background: var(--clr-primary-7);
    opacity: 1;
    filter: blur(0.4px);
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-4);
    cursor: pointer;
  }
`;

export default EditPassword;
