import React, { useState } from "react";
import unid from "uniqid";
import { useEmployeesContext } from "../../context/EmployeesContext";
import { useNavigate, useParams } from "react-router-dom";

export const EditEmployee = () => {
  const navigate = useNavigate();
  const params = useParams();

  const id = params.id;

  const { employees, setEmployees } = useEmployeesContext();

  const [employee, setEmployee] = useState(
    employees.find(({ dni }) => dni === id)
  );

  const saveEmployee = (id, emp) => {
    setEmployees(
      employees.map((employee) =>
        employee.dni === id ? (employee = emp) : employee
      )
    );
    navigate("/");
  };

  return (
    <div className="add-employee">
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          placeholder="Full Name"
          id="name"
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
          id="generate-dni"
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
          id="position"
          placeholder="Position"
          value={employee.position}
          onChange={(e) =>
            setEmployee({ ...employee, position: e.target.value })
          }
        />
      </div>

      <div className="actions">
        <button id="save-employee" onClick={() => saveEmployee(id, employee)}>
          Confirm
        </button>
        <button id="cancel-employee" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
};
