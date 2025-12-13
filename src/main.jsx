import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import App from "./App.jsx";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import EmployeeContext from "./Store/EmployeeContext.jsx";
import { ToastContainer, toast } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <EmployeeContext>
        <App />
        <ToastContainer />
      </EmployeeContext>
    </PrimeReactProvider>
  </StrictMode>
);
