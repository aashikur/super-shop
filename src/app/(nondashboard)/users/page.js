"use client";
import Container from '@/app/components/Container';
import Loading from '@/app/components/Loading';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const GetUsers = () => {  
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { data: session } = useSession();  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
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

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <Container className='min-h-[60vh]'>
      <div className="py-8">
        <h2 className="text-2xl font-semibold mb-6">Connect With Merchant ({allUsers.length})</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">User</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Role</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Joined</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Login Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                      width={40}
                      height={40} 
                        src={user.photoURL} 
                        alt={user.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.address}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="text-gray-900">{user.email}</div>
                      <div className="text-gray-500">{user.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                      ${user.role === 'merchant' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                      ${user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {user.loginCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default GetUsers;
