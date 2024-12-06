import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (adminData) => {
    setUser(adminData);
    localStorage.setItem("admin", JSON.stringify(adminData));
  };

  return (
    <AdminContext.Provider value={{ user, login }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
