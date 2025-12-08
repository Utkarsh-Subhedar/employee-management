import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import App from "./App.jsx";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import EmployeeContext from "./Store/EmployeeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <EmployeeContext>
        <App />
      </EmployeeContext>
    </PrimeReactProvider>
  </StrictMode>
);
