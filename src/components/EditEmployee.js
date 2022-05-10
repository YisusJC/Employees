import React, { useContext, useState } from 'react';
import unid from 'uniqid';
import { EmployeesContext } from '../context/EmployeesContext';
import { useNavigate, useParams } from 'react-router-dom'; 

export const EditEmployee = ({id = "MBJ34368V12P5"}) => {
    const navigate = useNavigate();
    const params = useParams();

    id = params.id;

    const {employees, setEmployees} = useContext(EmployeesContext)

    const [employee, setEmployee] = useState(employees.find(({dni}) => dni === id));

    const saveEmployee = (id, emp) => {
        setEmployees(employees.map(employee => employee.dni === id ? employee = emp : employee));
        navigate("/")
    }
    
    return (
        <div className='add-employee'>
            <div className="field">
                <label>Name</label>
                <input type="text" placeholder='Full Name' value={employee.name} onInput={e => setEmployee({...employee, name: e.target.value})} />
            </div>
            <div className="field">
                <label>DNI</label>
                <input type="text" placeholder='DNI' value={employee.dni} onInput={e => setEmployee({...employee, dni: e.target.value})} />
                <button onClick={() => {setEmployee({...employee, dni: ""}); setEmployee({...employee, dni: unid().toUpperCase()})}}>Generate</button>
            </div>
            <div className="field">
                <label>Birth date</label>
                <input type="text" placeholder='DD/MM/YYYY' value={employee.birth} onInput={e => setEmployee({...employee, birth: e.target.value})} />
            </div>
            <div className="field">
                <label>Address</label>
                <input type="text" placeholder='Address' value={employee.address} onInput={e => setEmployee({...employee, address: e.target.value})} />
            </div>
            <div className="field">
                <label>Phone</label>
                <input type="text" placeholder='Phone' value={employee.phone} onInput={e => setEmployee({...employee, phone: e.target.value})} />
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" placeholder='Email' value={employee.email} onInput={e => setEmployee({...employee, email: e.target.value})} />
            </div>
            <div className="field">
                <label>Position</label>
                <input type="text" placeholder='Position' value={employee.position} onInput={e => setEmployee({...employee, position: e.target.value})} />
            </div>

            <div className="actions">
                <button onClick={() => saveEmployee(id, employee)}>Confirm</button>
                <button onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    )
}
