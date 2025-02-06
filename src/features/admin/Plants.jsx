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
      <div className="overflow-x-auto min-h-[520px]">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden min-h-[250px]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedPlants.length === currentItems.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-blue-600"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Plant ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Plant Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {currentItems.map((plant) => (
                  <tr key={plant._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedPlants.includes(plant._id)}
                        onChange={() => handleSelectPlant(plant._id)}
                        className="rounded border-gray-300 text-blue-600"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">#{plant.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={plant.primaryImage}
                        alt={plant.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{plant.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">₹{plant.price}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDelete(plant._id)}
                      >
                        <Trash2 className="h-5 w-5" />
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
      <div className="flex items-center justify-between mt-4">
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
        <div className="text-sm text-gray-600">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredPlants.length)} of {filteredPlants.length} results
        </div>
      </div>
    </div>
  );
};

export default Plants;