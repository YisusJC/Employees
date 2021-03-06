import React from "react";
import { useEmployeesContext } from "../../context/EmployeesContext";
import { useNavigate, useParams } from "react-router-dom";

export const Employees = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { employees, setEmployees } = useEmployeesContext();

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(({ dni }) => dni !== id));
  };

  const EmployeeTr = ({ employee }) => (
    <tr key={employee.dni}>
      <th scope="row">{employee.name}</th>
      <td>{employee.dni}</td>
      <td>{employee.birth}</td>
      <td className="address">{employee.address}</td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>{employee.position}</td>
      <td className="buttons">
        <button onClick={() => deleteEmployee(employee.dni)}>🗑️</button>
        <button onClick={() => navigate(`/edit-employee/${employee.dni}`)}>
          ✏️
        </button>
      </td>
    </tr>
  );

  return (
    <table className="employees">
      <thead>
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">DNI</th>
          <th scope="col">Birth</th>
          <th scope="col" className="address">
            Address
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Position</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, idx) =>
          params.sp ? (
            employee.name.toLowerCase().includes(params?.sp?.toLowerCase()) && (
              <EmployeeTr key={idx} employee={employee} />
            )
          ) : (
            <EmployeeTr key={idx} employee={employee} />
          )
        )}
      </tbody>
    </table>
  );
};
