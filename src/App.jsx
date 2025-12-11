import { useContext } from "react";
import AddCard from "./Component/AddCard";
import CardsSection from "./Component/CardsSection";
import { Employeestore } from "./Store/EmployeeContext";

function App() {
  const { employeeData } = useContext(Employeestore);
  return (
    <div className="bg-sky-100 min-h-screen pt-1">
      <div
        className={`${employeeData.length > 0 ? "visible" : "hidden"} text-end`}
      >
        <AddCard />
      </div>
      <CardsSection />
    </div>
  );
}

export default App;
