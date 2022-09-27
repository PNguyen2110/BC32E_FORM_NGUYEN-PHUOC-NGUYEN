import {
  UPDATE_USER,
  ADD_USER,
  DELETE_USER,
  SEARCH_USER,
  EDIT_USER,
} from "../Types/Type";

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};

export const editUser = (payload) => {
  return {
    type: EDIT_USER,
    payload,
  };
};

export const searchUser = (payload) => {
  return {
    type: SEARCH_USER,
    payload,
  };
};
