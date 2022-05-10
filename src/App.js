import React, { useState } from 'react';
import { Header } from './components/Header';
import { EmployeesContext } from './context/EmployeesContext';
import { AppRouter } from './router/AppRouter';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Jaime Armando Straus",
      address: "Los Angeles, CA",
      dni: "MBJ34368V12P5",
      birth: "19/03/1998",
      phone: "5628903455",
      email: "jaime.armando@aspiresys.com",
      position: "Front-end Developer"
    },
    {
      name: "Jose Armando Straus",
      address: "Washington, DC",
      dni: "NFIN3543543NKBN",
      birth: "19/03/1980",
      phone: "5628903455",
      email: "jose.armando@aspiresys.com",
      position: "Back-end Developer"
    }
  ]);

  return (
    <EmployeesContext.Provider value={{employees, setEmployees}}>
      <Router>
        <div className="app">
          <Header />
          <AppRouter />
        </div>
      </Router>
    </EmployeesContext.Provider>
  );
}

export default App;
