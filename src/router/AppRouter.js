import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddEmployee } from "../components/AddEmployee/AddEmployee";
import { EditEmployee } from "../components/EditEmployee/EditEmployee";
import { Employees } from "../components/Employees/Employees";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/add-employee" element={<AddEmployee />} />
        <Route exact path="/edit-employee/:id" element={<EditEmployee />} />
        <Route exact path="/search/:sp" element={<Employees />} />
        <Route exact path="/" element={<Employees />} />
      </Routes>
    </div>
  );
};
