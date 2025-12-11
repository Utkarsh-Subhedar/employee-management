import { useContext } from "react";
import AddCard from "./Component/AddCard";
import CardsSection from "./Component/CardsSection";
import { Employeestore } from "./Store/EmployeeContext";

function App() {
  const { employeeData } = useContext(Employeestore);
  return (
    <div>
      <div
        className={`${
          employeeData.length > 0 ? "visible" : "hidden"
        } m-3 text-end`}
      >
        <AddCard />
      </div>
      <CardsSection />
    </div>
  );
}

export default App;
