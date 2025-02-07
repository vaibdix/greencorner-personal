import React, { useContext, useEffect, useState } from 'react';
import { Trash2, X, Search } from 'lucide-react';
import { context } from '../../store/AppContext';
import { api } from '../../store/context/api';
import { ACTIONS } from '../../store/context/actions';
import { Link } from 'react-router-dom';

const UsersAdmin = () => {
  const { state, dispatch } = useContext(context);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Filter users based on search term
  const filteredUsers = state.users?.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(currentUsers.map(user => user._id));
    } else {
      setSelectedUsers([]);
    }
  };

  // Handle individual select
  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const fetchUsers = async () => {
    try {
      const response = await api.getUsers();
      dispatch({ type: ACTIONS.SET_USERS, payload: response.data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!userToDelete?._id) {
      console.error('No user ID provided');
      return;
    }
    
    try {
      await api.deleteUser(userToDelete._id);
      dispatch({ type: ACTIONS.DELETE_USER, payload: userToDelete._id });
      setDeleteModal(false);
      setUserToDelete(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between px-2 sm:px-0">
        <h2 className="text-lg font-semibold">Users Management</h2>
        <Link
          to="/admin/add-user"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Add New User
        </Link>
      </div>

      {/* Search and Page Size Controls */}
      <div className="mb-4 flex items-center space-x-4">
        <div className="relative max-w-xs">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="w-full rounded-lg border border-[#CACCE2] py-2 pr-4 pl-10"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="rounded-lg border border-[#CACCE2] px-3 py-2"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={10}>10 per page</option>
          <option value={15}>15 per page</option>
          <option value={20}>20 per page</option>
          <option value={25}>25 per page</option>
          <option value={50}>50 per page</option>
        </select>
      </div>

      {/* Table */}
      <div className="m-1 overflow-x-auto rounded-md border border-[#CACCE2]">
        <div className="inline-block min-w-full align-middle">
          <div className="min-h-[250px] overflow-hidden md:rounded-lg">
            <table className="min-w-full divide-y divide-[#CACCE2]">
              <thead className="text-white">
                <tr>
                  <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === currentUsers.length}
                      onChange={handleSelectAll}
                      className="absolute top-1/2 left-4 -mt-2 h-4 w-4 rounded border border-[#CACCE2] text-blue-600 sm:left-6"
                    />
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-4 text-left text-xs font-medium tracking-wider text-gray-900 uppercase sm:table-cell"
                  >
                    User ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-xs font-medium tracking-wider text-gray-900 uppercase"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-4 text-left text-xs font-medium tracking-wider text-gray-900 uppercase md:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-4 text-left text-xs font-medium tracking-wider text-gray-900 uppercase lg:table-cell"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-right text-xs font-medium tracking-wider text-gray-900 uppercase"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c1c3e8]">
                {currentUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-[#c1c3e8]/20 transition-colors duration-150">
                    <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user._id)}
                        onChange={() => handleSelectUser(user._id)}
                        className="absolute top-1/2 left-4 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 sm:left-6"
                      />
                    </td>
                    <td className="hidden px-3 py-4 text-sm whitespace-nowrap sm:table-cell">
                      #{user.id}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            src={
                              user.avatar ||
                              `https://ui-avatars.com/api/?name=${user.name}&background=random`
                            }
                            alt={user.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{user.name}</div>
                          <div className="text-sm md:hidden">{user.email}</div>
                          <div className="text-xs lg:hidden">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                                user.role === 'admin'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {user.role || 'user'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="hidden px-3 py-4 text-sm whitespace-nowrap text-gray-900 md:table-cell">
                      {user.email}
                    </td>
                    <td className="hidden px-3 py-4 text-sm whitespace-nowrap text-gray-900 lg:table-cell">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                          user.role === 'admin'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {user.role || 'user'}
                      </span>
                    </td>
                    <td className="px-3 py-4 text-right text-sm font-medium whitespace-nowrap">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDeleteClick(user)}
                      >
                        <Trash2 className="mr-5 h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded border border-[#CACCE2] px-3 py-1 text-gray-900 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-900">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="rounded border border-[#CACCE2] px-3 py-1 text-gray-900 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="text-sm text-gray-600">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredUsers.length)} of{' '}
          {filteredUsers.length} results
        </div>
      </div>

      {/* Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Trash2 className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-white">Delete User</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this user? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setDeleteModal(false);
                    setUserToDelete(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersAdmin;