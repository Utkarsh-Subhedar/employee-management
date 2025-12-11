import React from "react";
import { useContext } from "react";
import { Employeestore } from "../Store/EmployeeContext";
import Card from "./Card";
import AddCard from "./AddCard";

const CardsSection = () => {
  const { employeeData } = useContext(Employeestore);

  return (
    <div>
      {employeeData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-4">
          {employeeData.map((data) => (
            <Card EmployeeData={data} key={data.id} />
          ))}
        </div>
      ) : (
        <div
          className="w-full bg-teal-100 grid grid-cols-1
            place-items-center mt-[25%] md:mt-[14%] py-5 space-y-5"
        >
          <span
            className="text-slate-800 capitalize text-base
            md:text-2xl font-semibold font-sans"
          >
            "Get started by adding your first user"
          </span>
          <div>
            <AddCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsSection;
