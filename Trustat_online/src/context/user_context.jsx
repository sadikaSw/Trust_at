import axios from "axios";
import "../utils/axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  SET_USER,
  FETCH_PASSWORDS_SUCCESS,
  FETCH_PASSWORDS_ERROR,
  CREATE_PASSWORD_SUCCESS,
  CREATE_PASSWORD_ERROR,
  DELETE_PASSWORD_ERROR,
  FETCH_SINGLE_PASSWORD_SUCCESS,
  FETCH_SINGLE_PASSWORD_ERROR,
  EDIT_PASSWORD_SUCCESS,
  EDIT_PASSWORD_ERROR,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_ERROR,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_ERROR,
  DELETE_NOTE_ERROR,
  FETCH_SINGLE_NOTE_SUCCESS,
  FETCH_SINGLE_NOTE_ERROR,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_ERROR,
} from "../action";
import reducer from "../reducers/user_reducer";

const initialState = {
  user: null,
  isLoading: false,
  passwords: [],
  notes: [],
  showAlert: false,
  editItem: null,
  singlePasswordError: false,
  singleNoteError: false,
  editComplete: false,
};

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // register user
  const register = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/auth/register`, {
        ...userInput,
      });
      console.log(data);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };
  //  // Email  verification
  //  const EmailVerifer = async (userInput) => {
  //   setLoading();
  //   try {
  //     const { data } = await axios.post(`/auth/register`, {
  //       ...userInput,
  //     });
  //     console.log(data);
  //     dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name });
  //     localStorage.setItem(
  //       "user",
  //       JSON.stringify({ name: data.user.name, token: data.token })
  //     );
  //   } catch (error) {
  //     dispatch({ type: REGISTER_USER_ERROR });
  //   }
  // };


  // login
  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/auth/login`, {
        ...userInput,
      });
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };

  //logout
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT_USER });
  };

  // fetch passwords
  const fetchPasswords = async () => {
    setLoading();
    try {
      const { data } = await axios.get(`/passwords`);
      // console.log(data);
      dispatch({ type: FETCH_PASSWORDS_SUCCESS, payload: data.jobs });
    } catch (error) {
      dispatch({ type: FETCH_PASSWORDS_ERROR });
      logout();
    }
  };

  // create password
  const createPassword = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/email`, {
        ...userInput,
      });

      localStorage.setItem(
        "email",
        JSON.stringify({ data })
      );

      dispatch({ type: CREATE_PASSWORD_SUCCESS, payload: data.password });
    } catch (error) {
      dispatch({ type: CREATE_PASSWORD_ERROR });
    }
  };


  const checkIP = async (port, ipaddress) => {
    setLoading();
    const data1 = {port, ipaddress}
    try {
      const { data } = await axios.post(`/ip`, 
      data1
    );
      return data
    } catch (error) {
    
    }
  };

  const checkHash = async (hash) => {
    setLoading();
    const data1 = {hash}
    try {
      const { data } = await axios.post(`/hash`, 
      data1
    );
      return data
    } catch (error) {
    
    }
  };
  
  

  // delete password
  const deletePassword = async (passwordId) => {
    setLoading();
    try {
      await axios.delete(`/passwords/${passwordId}`);
      fetchPasswords();
    } catch (error) {
      dispatch({ type: DELETE_PASSWORD_ERROR });
    }
  };

  // fetch single password
  const fetchSignlePassword = async (passwordId) => {
    setLoading();
    try {
      const { data } = await axios.get(`/passwords/${passwordId}`);
      dispatch({ type: FETCH_SINGLE_PASSWORD_SUCCESS, payload: data.job });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_PASSWORD_ERROR });
    }
  };

  // edit password
  const editPassword = async (passwordId, userInput) => {
    setLoading();
    try {
      const { data } = await axios.patch(`/passwords/${passwordId}`, {
        ...userInput,
      });
      dispatch({ type: EDIT_PASSWORD_SUCCESS, payload: data.job });
    } catch (error) {
      dispatch({ type: EDIT_PASSWORD_ERROR });
    }
  };

  // fetch notes
  const fetchNotes = async () => {
    setLoading();
    try {
      const { data } = await axios.get(`/notes`);
      console.log(data);
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: data.jobs });
    } catch (error) {
      dispatch({ type: FETCH_NOTES_ERROR });
      logout();
    }
  };

  // create note
  const createNote = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/notes`, {
        ...userInput,
      });

      dispatch({ type: CREATE_NOTE_SUCCESS, payload: data.jobs });
    } catch (error) {
      dispatch({ type: CREATE_NOTE_ERROR });
    }
  };

  // delete note
  const deleteNote = async (noteId) => {
    setLoading();
    try {
      await axios.delete(`/notes/${noteId}`);
      fetchPasswords();
    } catch (error) {
      dispatch({ type: DELETE_NOTE_ERROR });
    }
  };

  // fetch single note
  const fetchSignleNote = async (noteId) => {
    setLoading();
    try {
      const { data } = await axios.get(`/notes/${noteId}`);
      dispatch({ type: FETCH_SINGLE_NOTE_SUCCESS, payload: data.job });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_NOTE_ERROR });
    }
  };

  // edit note
  const editNote = async (noteId, userInput) => {
    setLoading();
    try {
      const { data } = await axios.patch(`/notes/${noteId}`, {
        ...userInput,
      });
      dispatch({ type: EDIT_NOTE_SUCCESS, payload: data.job });
    } catch (error) {
      dispatch({ type: EDIT_NOTE_ERROR });
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const newUser = JSON.parse(user);
      dispatch({ type: SET_USER, payload: newUser.name });
    }
  }, []);

  // useEffect(() => {
  //   fetchPasswords();
  //   fetchNotes();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        setLoading,
        register,
        login,
        logout,
        fetchPasswords,
        createPassword,
        deletePassword,
        fetchSignlePassword,
        editPassword,
        fetchNotes,
        createNote,
        deleteNote,
        fetchSignleNote,
        editNote,
        checkIP,
        checkHash
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserProvider };
