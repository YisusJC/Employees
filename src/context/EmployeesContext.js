import { createContext, useContext } from "react";

export const AppContext = createContext();
export const useEmployeesContext = () => useContext(AppContext);
export default AppContext;
