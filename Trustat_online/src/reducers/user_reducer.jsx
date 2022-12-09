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

const reducer = (state, action) => {
  // loading
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true, showAlert: false, editComplete: false };
  }
  // register user
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
    };
  }
  // register user error
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }
  // set user
  if (action.type === SET_USER) {
    return { ...state, user: action.payload };
  }
  // logout user
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
      showAlert: false,
      isEditing: false,
      passwords: [],
      editItem: null,
    };
  }
  // feting password
  if (action.type === FETCH_PASSWORDS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      editItem: null,
      singlePasswordError: false,
      editComplete: false,
      passwords: action.payload,
    };
  }
  if (action.type === FETCH_PASSWORDS_ERROR) {
    return { ...state, isLoading: false };
  }
  // create password
  if (action.type === CREATE_PASSWORD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      passwords: [...state.passwords, action.payload],
    };
  }
  if (action.type === CREATE_PASSWORD_ERROR) {
    return { ...state, isLoading: false, showAlert: true };
  }
  // delete password
  if (action.type === DELETE_PASSWORD_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
    };
  }
  // fetch single password
  if (action.type === FETCH_SINGLE_PASSWORD_SUCCESS) {
    return { ...state, isLoading: false, editItem: action.payload };
  }
  if (action.type === FETCH_SINGLE_PASSWORD_ERROR) {
    return {
      ...state,
      isLoading: false,
      editItem: "",
      singlePasswordError: true,
    };
  }
  // edit password
  if (action.type === EDIT_PASSWORD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      editComplete: true,
      editItem: action.payload,
    };
  }
  if (action.type === EDIT_PASSWORD_ERROR) {
    return {
      ...state,
      isLoading: false,
      editComplete: true,
      showAlert: true,
    };
  }

  // fetch notes
  if (action.type === FETCH_NOTES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      editItem: null,
      singleNoteError: false,
      editComplete: false,
      notes: action.payload,
    };
  }
  if (action.type === FETCH_NOTES_ERROR) {
    return { ...state, isLoading: false };
  }
  // create note
  if (action.type === CREATE_NOTE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      notes: [...state.notes, action.payload],
    };
  }
  if (action.type === CREATE_NOTE_ERROR) {
    return { ...state, isLoading: false, showAlert: true };
  }
  // delete password
  if (action.type === DELETE_NOTE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
    };
  }
  // fetch single note
  if (action.type === FETCH_SINGLE_NOTE_SUCCESS) {
    return { ...state, isLoading: false, editItem: action.payload };
  }
  if (action.type === FETCH_SINGLE_NOTE_ERROR) {
    return {
      ...state,
      isLoading: false,
      editItem: "",
      singleNoteError: true,
    };
  }
  // edit note
  if (action.type === EDIT_NOTE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      editComplete: true,
      editItem: action.payload,
    };
  }
  if (action.type === EDIT_NOTE_ERROR) {
    return {
      ...state,
      isLoading: false,
      editComplete: true,
      showAlert: true,
    };
  }
};

export default reducer;
