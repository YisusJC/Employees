import React, { useState } from "react";
import { Header } from "./components/Header";
import AppContext from "./context/EmployeesContext";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Jaime Armando Straus",
      address: "Los Angeles, CA",
      dni: "MBJ34368V12P5",
      birth: "19/03/1998",
      phone: "5628903455",
      email: "jaime.armando@aspiresys.com",
      position: "Front-end Developer",
    },
    {
      name: "Jose Armando Straus",
      address: "Washington, DC",
      dni: "NFIN3543543NKBN",
      birth: "19/03/1980",
      phone: "5628903455",
      email: "jose.armando@aspiresys.com",
      position: "Back-end Developer",
    },
  ]);

  return (
    <Router>
      <AppContext.Provider value={{ employees, setEmployees }}>
        <div className="app">
          <Header />
          <AppRouter />
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
