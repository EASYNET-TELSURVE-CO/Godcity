// src/components/MemberManagement/MemberList.jsx
import React, { useEffect, useState } from 'react';
import { getMembers } from '../../api/members';
import MemberProfile from './MemberProfile';

const MemberList = () => {
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
    <div>
      {members.map((member) => (
        <MemberProfile key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MemberList;
