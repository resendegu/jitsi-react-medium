import React, { useState, createContext } from "react";

export const MeetContext = createContext();

export const MeetProvider = ({ children }) => {
  const nameStored = localStorage.getItem('name');
  const [name, setName] = useState(nameStored ? nameStored : '');
  localStorage.setItem('name', name);
  
  return (
    <MeetContext.Provider value={[name, setName]}>
      {children}
    </MeetContext.Provider>
  );
};
