// import { useState, useEffect, useCallback, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { context } from '../../../store/AppContext';

// const SearchModal = ({ isOpen, onClose }) => {
//   const { state } = useContext(context);
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();

//   const handleSearch = useCallback((searchQuery) => {
//     if (!searchQuery.trim()) {
//       setResults([]);
//       return;
//     }

//     const searchResults = state.plants.filter((plant) =>
//       plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       plant.description.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setResults(searchResults);
//   }, [state.plants]);

//   useEffect(() => {
//     handleSearch(query);
//   }, [query, handleSearch]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
//           />
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50 bg-white rounded-xl shadow-2xl border border-gray-200"
//           >
//             <div className="p-4">
//               <div className="flex items-center gap-3 px-3 py-2 rounded-lg border mb-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-gray-400"
//                 >
//                   <circle cx="11" cy="11" r="8" />
//                   <path d="m21 21-4.3-4.3" />
//                 </svg>
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search plants..."
//                   className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500"
//                   autoFocus
//                 />
//               </div>
//               <div className="max-h-[60vh] overflow-y-auto">
//                 {results.map((plant) => (
//                   <div
//                     key={plant.id}
//                     onClick={() => {
//                       navigate(`/product/${plant.id}`);
//                       onClose();
//                     }}
//                     className="p-4 cursor-pointer rounded-lg transition-colors hover:bg-gray-100"
//                   >
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={plant.primaryImage}
//                         alt={plant.name}
//                         className="w-12 h-12 object-cover rounded"
//                       />
//                       <div>
//                         <h3 className="font-medium text-gray-900">{plant.name}</h3>
//                         <p className="text-sm text-gray-600">₹{plant.price}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 {query && results.length === 0 && (
//                   <div className="p-4 text-center">
//                     <p className="text-gray-600">No plants found for "{query}"</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default SearchModal;

import { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { context } from '../../../store/AppContext';
import { Command } from 'lucide-react';

const SearchModal = ({ isOpen, onClose }) => {
  const { state } = useContext(context);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) => (prev + 1) % results.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
          break;
        case 'Enter':
          e.preventDefault();
          if (results[activeIndex]) {
            navigate(`/product/${results[activeIndex].id}`);
            onClose();
          }
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    // Add CMD+K (or CTRL+K) shortcut
    const handleCommandK = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleCommandK);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleCommandK);
    };
  }, [isOpen, results, activeIndex, navigate, onClose]);

  const handleSearch = useCallback(
    (searchQuery) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      const searchResults = state.plants.filter(
        (plant) =>
          plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          plant.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(searchResults);
    },
    [state.plants]
  );

  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);

  // Add keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#1C3035]/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-[20%] left-1/2 z-50 w-full max-w-xl -translate-x-1/2 rounded-xl border border-green-500 bg-[#1C3035] shadow-2xl"
          >
            <div className="p-4">
              <div className="mb-2 flex items-center gap-3 rounded-lg px-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search or type a command"
                  className="flex-1 border-none bg-transparent text-gray-200 placeholder-gray-500 outline-none"
                  autoFocus
                />
                <kbd className="rounded bg-[#fff] px-2 py-1 text-xs text-gray-900">
                  <Command size={12} className="mr-1 inline" />K
                </kbd>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                {results.map((plant, index) => (
                  <div
                    key={plant.id}
                    onClick={() => {
                      navigate(`/product/${plant.id}`);
                      onClose();
                    }}
                    className={`group cursor-pointer rounded-lg p-4 transition-colors ${
                      index === activeIndex ? 'bg-[#4C6368]' : 'hover:bg-[##4C6368]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={plant.primaryImage}
                          alt={plant.name}
                          className="h-8 w-8 rounded object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-gray-100">{plant.name}</h3>
                          <p className="text-sm text-gray-400">₹{plant.price}</p>
                        </div>
                      </div>
                      <span className="text-sm text-white">View details</span>
                    </div>
                  </div>
                ))}
                {query && results.length === 0 && (
                  <div className="p-4 text-center">
                    <p className="text-gray-400">No results found for "{query}"</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
