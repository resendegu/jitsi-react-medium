import React, { useState, createContext } from "react";

export const MeetContext = createContext();

export const MeetProvider = ({ children }) => {
  const nameStored = localStorage.getItem('name');
  const emailStored = localStorage.getItem('email');
  const [name, setName] = useState(nameStored ? nameStored : '');
  const [email, setEmail] = useState(emailStored ? emailStored : '');
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  
  return (
    <MeetContext.Provider value={[name, setName, email, setEmail]}>
      {children}
    </MeetContext.Provider>
  );
};
