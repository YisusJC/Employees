import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [sp, setSp] = useState("");

  return (
    <div className="header">
      <h1 id="main-title" onClick={() => navigate("/")}>
        Employees Admin
      </h1>
      <div className="header__search">
        <button onClick={() => navigate("/add-employee")}>Add Employee</button>
        <input
          id="search-input"
          type="text"
          placeholder="write some name..."
          value={sp}
          onChange={(e) => setSp(e.target.value)}
        />
        <button onClick={() => navigate(sp.length > 1 ? `/search/${sp}` : "/")}>
          Search
        </button>
      </div>
    </div>
  );
};
