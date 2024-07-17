// src/contexts/MemberContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getMembers } from '../api/members';

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getMembers();
        setMembers(response.data);
      } catch (error) {
        console.error('Failed to fetch members', error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <MemberContext.Provider value={{ members, setMembers }}>
      {children}
    </MemberContext.Provider>
  );
};
