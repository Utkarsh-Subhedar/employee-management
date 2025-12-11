import React, { useReducer, useState, useEffect } from "react";
import { createContext } from "react";

export const Employeestore = createContext();

const handleData = (state, action) => {
  if (action.name === "add") {
    const newId = state.length + 1; // simple, correct, stable
    return [...state, { ...action.payload.userData, id: newId }];
  }
  if (action.name === "edit") {
    return state.map((item) =>
      item.id === action.payload.userData.id ? action.payload.userData : item
    );
  }

  return state;
};

const EmployeeContext = ({ children }) => {
  const [employeeData, dispatch] = useReducer(
    handleData,
    JSON.parse(localStorage.getItem("userData"))
      ? JSON.parse(localStorage.getItem("userData"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(employeeData));
  }, [employeeData]);
  const addCard = (userData) => {
    dispatch({
      name: "add",
      payload: {
        userData,
      },
    });
  };
  const editCard = (userData) => {
    console.log(userData);
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
