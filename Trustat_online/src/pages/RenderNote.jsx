import React, { useEffect, useContext } from "react";
import { FaBars, FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Activity_Sidebar, NoteModal } from "../components";
import { useGlobalContext } from "../context/user_context";
import { AppContext } from "../context/activity_sidebar_context";

function RenderPassword() {
  const { notes, isLoading, deleteNote, fetchNotes } =
    useGlobalContext();
  const { openSidebar, openModal, isSidebarOpen } = useContext(AppContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (notes.length < 1) {
    return (
      <EmptyContainer>
        <h5>
          Currently, you have no <span>Notes </span>
          to display
        </h5>
        <Link className="btn" to="registernote">
          Add Note
        </Link>
      </EmptyContainer>
    );
  }

  return (
    <>
      <Activity_Sidebar />
      <Wrapper>
        <main>
          {isSidebarOpen ? null : (
            <button className="sidebar-toggle" onClick={openSidebar}>
              <FaBars />
            </button>
          )}
          {isSidebarOpen ? null : (
            <div className="center">
              <NoteModal />
              <button className="butn" onClick={openModal}>
                Add Note
              </button>
            </div>
          )}
          <main className={isSidebarOpen ? "close" : "open"}>
            <div className="grid">
              {notes.map((item) => {
                const { _id: id, name, note } = item;
                return (
                  <div className="col" key={id}>
                    <div className="box">
                      <div className="action-div">
                        <Link
                          to={`/editnote/${id}`}
                          className="edit-btn"
                          type="button"
                          onClick={openModal}
                        >
                          <FaEdit />
                        </Link>
                        <button
                          className=" delete-btn"
                          type="button"
                          onClick={() => deleteNote(id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <h3 className="title">
                        <u>{name}</u>
                      </h3>
                      <div className="color">
                        <b>Note</b> - {note}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </main>
      </Wrapper>
    </>
  );
}

const EmptyContainer = styled.section`
  margin-top: 5rem;
  text-align: center;
  padding: 2rem;
  min-height: 70vh;
  padding-bottom: 20rem;
  font-size: 7rem;
  h5 {
    text-transform: none;
  }
  span {
    color: red;
  }
`;
const Wrapper = styled.section`
  main {
    min-height: 100vh;
  }
  .edit-btn {
    color: #3f7bdd;
    border-color: transparent;
    background: transparent !important;
    outline: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    display: inline-block;
    appearance: none;
  }
  .delete-btn {
    color: var(--clr-red-dark);
    border-color: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    background: transparent;
  }
  .edit-btn,
  .delete-btn {
    font-size: 1rem;
    line-height: 1.15;
    margin-bottom: -3px;
  }

  .action-div {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 0 0.5rem;
  }
  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid var(--grey-400);
    border-radius: 50%;
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
    margin: 0 auto;
  }
  .loading {
    margin: 0 auto;
  }
  .open {
    padding-top: 9rem;
  }
  .close {
    padding-top: 9rem;
    padding-left: 24rem;
    transition: var(--transition);
    transform: translate(5%);
  }
  .show-close {
    transform: translate(0);
  }
  /* .img{
    display:block;
    width:100%;
    max-width:100%
  } */
  .box {
    padding: 10px;
  }
  .title {
    padding-bottom: 20px;
    color: var(--clr-grey-1);
  }
  .color {
    color: var(--clr-grey-2);
    font-size: 1.2rem;
  }
  .username {
    color: var(--clr-grey-3);
  }
  .grid {
    display: grid;
    grid-gap: 16px;
    padding: 16px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    .col {
      background-color: var(--clr-grey-9);
      margin-bottom: 16px;
      padding: 16px;
      border-radius: 20px;
      box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.031),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.044),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.055),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.066),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.079),
        100px 100px 80px rgba(0, 0, 0, 0.11);
      /* align-self:start; */

      /* if want to grid picture */
      /* &.img-block {
        align-self:start;
        padding:0;
        background-color:none;
      } */
    }
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
  .center {
    position: relative;
    top: 8rem;
    margin: auto;
    text-align: center;
    width: 50%;
    padding: 20px;
  }
  .sidebar-toggle {
    position: absolute;
    padding-left: 2rem;
    top: 8rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    animation: bounce 2s ease-in-out infinite;
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .btn {
    text-transform: uppercase;
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid var(--clr-black);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    margin: 0.5rem;
  }
  .btn:hover {
    color: var(--clr-black);
    background: transparent;
  }
`;

export default RenderPassword;
