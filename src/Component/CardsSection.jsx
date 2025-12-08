import React from "react";
import { useContext } from "react";
import { Employeestore } from "../Store/EmployeeContext";
import Card from "./Card";

const CardsSection = () => {
  const { employeeData } = useContext(Employeestore);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-4">
      {employeeData?.map((data) => (
        <Card EmployeeData={data} key={data.id} />
      ))}
    </div>
  );
};

export default CardsSection;
