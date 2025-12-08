import React, { useReducer, useState } from "react";
import { createContext } from "react";
import Employees from "../Employees.json";

export const Employeestore = createContext();

const handleData = (state, action) => {
  if (action.name == "add") {
    return [...state, action.payload.userData];
  } else if (action.name == "edit") {
    const objectRemovedArray = state.filter(
      (employee) => employee.id !== action.payload.userData.id
    );
    return [...objectRemovedArray, action.payload.userData];
  }
  return state;
};

const EmployeeContext = ({ children }) => {
  const [employeeData, dispatch] = useReducer(handleData, Employees);
  const addCard = (userData) => {
    dispatch({
      name: "add",
      payload: {
        userData,
      },
    });
  };
  const editCard = (userData) => {
    dispatch({
      name: "edit",
      payload: {
        userData,
      },
    });
  };

  return (
    <Employeestore.Provider value={{ employeeData, addCard, editCard }}>
      {children}
    </Employeestore.Provider>
  );
};

export default EmployeeContext;
