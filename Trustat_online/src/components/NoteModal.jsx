import React, { useContext, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import { AppContext } from "../context/activity_sidebar_context";
import { useGlobalContext } from "../context/user_context";

const Modal = () => {
  const { isLoading, createNote, showAlert } = useGlobalContext();
 
  const [values, setValues] = useState({
    name: "",
    note: "",
  });
  const searchValue = React.useRef("");
  const { openSidebar, isSidebarOpen } = useContext(AppContext);
  const { isModalOpen, closeModal } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, note } = values;
    console.log(values);
    if (name && note) {
      createNote(values);
      setValues({ name: "", note: "" });
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay "
        }`}
      >
        <div className="modal-container">
          <form onSubmit={handleSubmit}>
            <h4 className="title">Name : </h4>
            <FormRow
              type="name"
              name="name"
              value={values.name}
              handleChange={handleChange}
              horizontal
              placeholder="Name of the Note"
              className="input"
            />
            <h4 className="title">Secure Note : </h4>
            <FormRow
              type="name"
              name="note"
              value={values.note}
              handleChange={handleChange}
              horizontal
              placeholder="This Note is important"
              className="input"
            />
            <button className="butn butn-submit" type="submit">
              {isLoading ? "Submitting Data..." : "Submit"}
            </button>
          </form>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form {
    width: 60vw;
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
    margin-bottom: 0.5rem;
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
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background: var(--clr-white);
    border-radius: var(--radius);
    width: 90vw;
    height: 60vh;
    max-width: var(--fixed-width);
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
    border-radius: 20px;
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }
`;

export default Modal;
