"use client";
import Container from '@/app/components/Container';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

// 🔹 FIXED: Capitalized component name
const Page = () => {  
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 🔹 FIXED: Removed unused variable 'status'
  const { data: session } = useSession();  

  console.log("🙄 : ", allUsers);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 🔹 FIXED: Added 'await'
        const res = await axios.get('/api/get-users');
        setAllUsers(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Container>
      users : {allUsers.length}
    </Container>
  );
};

// 🔹 FIXED: Updated export to match capitalized name
export default Page;
