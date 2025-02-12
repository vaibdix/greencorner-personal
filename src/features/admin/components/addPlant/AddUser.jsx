import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../../store/context/api';

const AddUser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    avatar: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.createUser(userData);
      if (response.status === 200 || response.status === 201) {
        alert('User added successfully!');
        navigate('/admin/users');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">Add New User</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">User Information</h4>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={userData.role}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
                <input
                  type="url"
                  name="avatar"
                  value={userData.avatar}
                  onChange={handleInputChange}
                  placeholder="https://example.com/avatar.jpg"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/admin/users')}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#1c3035] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#152327]"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
