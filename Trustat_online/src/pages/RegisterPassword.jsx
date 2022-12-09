import React, { useContext, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import { AppContext } from "../context/activity_sidebar_context";
import { useGlobalContext } from "../context/user_context";

function RegisterPassword() {
  const { isLoading, createPassword, showAlert } = useGlobalContext();
  const [state, setState] = useState();

  const [values, setValues] = useState({
    name: "",
    link: "",
    email: "",
    password: "",
  });
  const searchValue = React.useRef("");
//   const { openSidebar, isSidebarOpen } = useContext(AppContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, link, email, password } = values;
    console.log(values);
    if (name && link && email && password) {
      createPassword(values);
      setValues({ name: "", link: "", email: "" });
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <div className="modal-container">
        <form onSubmit={handleSubmit}>
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
            className="butn butn-generate btn"
            type="button"
            onClick={generatePassword}
          >
            Generate Password
          </button>
          <br />
          <button className="butn butn-submit btn" type="submit">
            {isLoading ? "Submitting Data..." && <Link to="/password" />: "Submit"}
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .modal-container {
    min-height: 75vh;
    text-align: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 3.5rem;
    padding: 0 3rem;
  }
  .form {
    width: 50vw;
    max-width: 1120px;
    background: var(--clr-grey-8);
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
    font-size: 0.875rem;
    margin-bottom: 0.8rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-5);
    border-radius: 20px;
    height: 100%;
    font-size: 1rem;
    padding: 0.5rem 4rem;
    text-align: center;
    border-radius: 20px;
    margin-top: -10rem;
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
  .butn-submit {
    margin: 15px;
  }
  .butn-generate {
    margin-left: 10px;
    margin: 8px;
  }

  .text {
    position: relative;
    text-align: center;
    align-items: center;
  }

  .title {
    padding-top: 5px;
  }
`;

export default RegisterPassword;
