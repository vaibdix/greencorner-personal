import React, { useContext, useEffect, useState } from 'react';
import { Trash2, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { context } from '../../store/AppContext';
import { Link } from 'react-router-dom';
import { api } from '../../store/context/api';
import { ACTIONS } from '../../store/context/actions';

const Plants = () => {
  const { state, fetchPlants, dispatch } = useContext(context);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlants, setSelectedPlants] = useState([]);

  // Filter plants based on search term
  const filteredPlants = state.plants?.filter(plant =>
    plant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.id?.toString().includes(searchTerm)
  ) || [];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPlants.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPlants(currentItems.map(plant => plant._id));
    } else {
      setSelectedPlants([]);
    }
  };

  // Handle individual select
  const handleSelectPlant = (plantId) => {
    setSelectedPlants(prev => 
      prev.includes(plantId) 
        ? prev.filter(id => id !== plantId)
        : [...prev, plantId]
    );
  };

  const handleDelete = async (id) => {
    try {
      await api.deletePlant(id);
      dispatch({ type: ACTIONS.DELETE_PLANT, payload: id });
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between px-2 sm:px-0">
        <h2 className="text-lg font-semibold">Plants Management</h2>
        <Link
          to="/admin/add-plant"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Add New Plant
        </Link>
      </div>

      {/* Search and Page Size Controls */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full"
            placeholder="Search plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="border border-gray-200 rounded-lg px-3 py-2"
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
      <div className="relative overflow-hidden border md:rounded-lg">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 sm:px-6 text-left">
                    <input
                      type="checkbox"
                      checked={selectedPlants.length === currentItems.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-blue-600"
                    />
                  </th>
                  <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {currentItems.map((plant) => (
                  <tr key={plant._id} className="hover:bg-gray-50">
                    <td className="px-3 py-3 sm:px-6 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedPlants.includes(plant._id)}
                        onChange={() => handleSelectPlant(plant._id)}
                        className="rounded border-gray-300 text-blue-600"
                      />
                    </td>
                    <td className="px-3 py-3 sm:px-6 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-gray-900">#{plant.id}</span>
                    </td>
                    <td className="px-3 py-3 sm:px-6 whitespace-nowrap">
                      <img
                        src={plant.primaryImage}
                        alt={plant.name}
                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-3 py-3 sm:px-6 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-gray-900">{plant.name}</span>
                    </td>
                    <td className="px-3 py-3 sm:px-6 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-gray-900">₹{plant.price}</span>
                    </td>
                    <td className="px-3 py-3 sm:px-6 whitespace-nowrap">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        plant.quantityAvailable > 10 
                          ? 'bg-green-100 text-green-800' 
                          : plant.quantityAvailable > 0 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {plant.quantityAvailable || 0}
                      </span>
                    </td>
                    <td className="px-3 py-3 sm:px-6 whitespace-nowrap">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDelete(plant._id)}
                      >
                        <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Update pagination for better mobile view */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="text-xs sm:text-sm text-gray-600">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredPlants.length)} of {filteredPlants.length} results
        </div>
      </div>
    </div>
  );
};

export default Plants;