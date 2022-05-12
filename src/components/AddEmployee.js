import React, { useState } from "react";
import unid from "uniqid";
import { useEmployeesContext } from "../context/EmployeesContext";
import { useNavigate } from "react-router-dom";

export const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    dni: "",
    birth: "",
    phone: "",
    email: "",
    position: "",
  });

  const { employees, setEmployees } = useEmployeesContext();

  const saveEmployee = () => {
    setEmployees([...employees, employee]);
    navigate("/");
  };

  return (
    <div className="add-employee">
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          value={employee.name}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        />
      </div>
      <div className="field">
        <label>DNI</label>
        <input
          type="text"
          placeholder="DNI"
          id="dni"
          value={employee.dni}
          onChange={(e) => setEmployee({ ...employee, dni: e.target.value })}
        />
        <button
          onClick={() => {
            setEmployee({ ...employee, dni: "" });
            setEmployee({ ...employee, dni: unid().toUpperCase() });
          }}
        >
          Generate
        </button>
      </div>
      <div className="field">
        <label>Birth date</label>
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          id="birth"
          value={employee.birth}
          onChange={(e) => setEmployee({ ...employee, birth: e.target.value })}
        />
      </div>
      <div className="field">
        <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          id="address"
          value={employee.address}
          onChange={(e) =>
            setEmployee({ ...employee, address: e.target.value })
          }
        />
      </div>
      <div className="field">
        <label>Phone</label>
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          value={employee.phone}
          onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        />
      </div>
      <div className="field">
        <label>Position</label>
        <input
          type="text"
          placeholder="Position"
          id="position"
          value={employee.position}
          onChange={(e) =>
            setEmployee({ ...employee, position: e.target.value })
          }
        />
      </div>

      <div className="actions">
        <button id="save-employee" onClick={saveEmployee}>
          Confirm
        </button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </div>
  );
};
