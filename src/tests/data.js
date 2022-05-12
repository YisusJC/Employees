const empData = [
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
];

export const employees = [...empData];
export const setEmployees = jest.fn();
