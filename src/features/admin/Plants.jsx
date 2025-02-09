import React, { useContext, useEffect, useState, Suspense } from 'react';
import { Trash2, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { context } from '../../store/AppContext';
import { Link } from 'react-router-dom';
import { api } from '../../store/context/api';
import { ACTIONS } from '../../store/context/actions';

// Skeleton UI for loading state
const SkeletonTable = () => (
  <div className="relative overflow-hidden border border-[#c1c3e8] md:rounded-lg">
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#1c1c1c] text-white">
            <tr>
              <th className="px-3 py-3 text-left sm:px-6"> </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                ID
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                Image
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                Name
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                Price
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                Stock
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c1c3e8] bg-white">
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="hover:bg-[#c1c3e8]/20">
                <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                  <div className="skeleton h-5 w-5 rounded bg-gray-300"></div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                  <div className="skeleton h-5 w-20 rounded bg-gray-300"></div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                  <div className="skeleton h-10 w-10 rounded-full bg-gray-300"></div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                  <div className="skeleton h-5 w-40 rounded bg-gray-300"></div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                  <div className="skeleton h-5 w-20 rounded bg-gray-300"></div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                  <div className="skeleton h-5 w-10 rounded bg-gray-300"></div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                  <div className="skeleton h-5 w-10 rounded bg-gray-300"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Plants = () => {
  const { state, fetchPlants, dispatch } = useContext(context);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlants, setSelectedPlants] = useState([]);

  // Filter plants based on search term
  const filteredPlants =
    state.plants?.filter(
      (plant) =>
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
      setSelectedPlants(currentItems.map((plant) => plant._id));
    } else {
      setSelectedPlants([]);
    }
  };

  // Handle individual select
  const handleSelectPlant = (plantId) => {
    setSelectedPlants((prev) =>
      prev.includes(plantId) ? prev.filter((id) => id !== plantId) : [...prev, plantId]
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
          className="rounded-md border border-[#1c1c1c] p-2 text-sm font-medium hover:bg-[#1c1c1c] hover:text-white"
        >
          Add New Plant
        </Link>
      </div>

      {/* Search and Page Size Controls */}
      <div className="mb-4 flex items-center space-x-4">
        <div className="relative max-w-xs">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#1c1c1c]" />
          <input
            type="text"
            className="w-full rounded-lg border border-[#1c1c1c] py-2 pr-4 pl-10"
            placeholder="Search plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="rounded-lg border border-[#1c1c1c] px-3 py-2"
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
      <Suspense fallback={<SkeletonTable />}>
        <div className="relative overflow-hidden border border-[#c1c3e8] md:rounded-lg">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#1c1c1c] text-white">
                  <tr>
                    <th className="px-3 py-3 text-left sm:px-6">
                      <input
                        type="checkbox"
                        checked={selectedPlants.length === currentItems.length}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 text-blue-600"
                      />
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                      ID
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                      Image
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                      Name
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                      Price
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                      Stock
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-white uppercase sm:px-6">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c1c3e8] bg-white">
                  {currentItems.map((plant) => (
                    <tr key={plant._id} className="hover:bg-[#c1c3e8]/20">
                      <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                        <input
                          type="checkbox"
                          checked={selectedPlants.includes(plant._id)}
                          onChange={() => handleSelectPlant(plant._id)}
                          className="rounded border-gray-300 text-blue-600"
                        />
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                        <span className="text-xs text-gray-900 sm:text-sm">#{plant.id}</span>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                        <img
                          src={plant.primaryImage}
                          alt={plant.name}
                          className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10"
                        />
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                        <span className="text-xs text-gray-900 sm:text-sm">{plant.name}</span>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                        <span className="text-xs text-gray-900 sm:text-sm">₹{plant.price}</span>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap sm:px-6">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                            plant.quantityAvailable > 10
                              ? 'bg-green-100 text-green-800'
                              : plant.quantityAvailable > 0
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {plant.quantityAvailable || 0}
                        </span>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap sm:px-6">
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
      </Suspense>

      {/* Update pagination for better mobile view */}
      <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded border border-[#1c1c1c] px-3 py-1 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-900">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="rounded border border-[#1c1c1c] px-3 py-1 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="text-xs text-gray-600 sm:text-sm">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredPlants.length)} of{' '}
          {filteredPlants.length} results
        </div>
      </div>
    </div>
  );
};

export default Plants;
