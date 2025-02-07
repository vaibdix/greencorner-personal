

import React, { useContext, useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  // Add ComposedChart to imports
  ComposedChart,
} from 'recharts';
import { context } from '../../store/AppContext';

const Analytics = () => {
  const { state, fetchPlants } = useContext(context);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        console.log('Starting to fetch plants...');
        const result = await fetchPlants();
        console.log('API Response:', result);
        console.log('Current state after fetch:', state);
        setIsLoading(false);
      } catch (err) {
        console.error('Error details:', err);
        setError('Failed to load data: ' + err.message);
        setIsLoading(false);
      }
    };
    loadData();
  }, []); // Remove fetchPlants from dependency array to prevent infinite loops

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <div className="flex h-screen items-center justify-center text-red-600">{error}</div>;
  }

  if (!state.plants || state.plants.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-600">
        No data available
      </div>
    );
  }

  // Revenue Analysis
  const revenueData = state.plants
    .map((plant) => ({
      name: plant.name?.substring(0, 15),
      revenue: plant.price * (plant.quantityAvailable || 0),
      stock: plant.quantityAvailable || 0,
    }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 8);

  // Stock Status Analysis
  const stockStatus = [
    { name: 'Out of Stock', value: state.plants.filter((p) => !p.quantityAvailable).length },
    {
      name: 'Low Stock (1-10)',
      value: state.plants.filter((p) => p.quantityAvailable > 0 && p.quantityAvailable <= 10)
        .length,
    },
    {
      name: 'Healthy Stock (>10)',
      value: state.plants.filter((p) => p.quantityAvailable > 10).length,
    },
  ];

  // Price Range Distribution
  const priceRanges = [
    { name: '₹0-500', value: state.plants.filter((p) => p.price <= 500).length },
    {
      name: '₹501-1000',
      value: state.plants.filter((p) => p.price > 500 && p.price <= 1000).length,
    },
    {
      name: '₹1001-2000',
      value: state.plants.filter((p) => p.price > 1000 && p.price <= 2000).length,
    },
    { name: '₹2000+', value: state.plants.filter((p) => p.price > 2000).length },
  ];

  // Pastel color palette
  const COLORS = ['#A8D0FF', '#BFD8B8', '#FFB3C1', '#FFF3B0', '#D4A6F7', '#F6D7B9'];

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-8 text-gray-800">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold">
          Analytics <span className="text-emerald-500">Dashboard</span>
        </h1>
        <p className="mt-2 text-gray-500">Real-time insights for your plant business</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-rose-50 p-6">
          <h3 className="text-sm font-medium text-gray-600">Total Products</h3>
          <p className="mt-2 text-3xl font-bold">{state.plants.length}</p>
          <p className="mt-1 text-sm text-gray-500">Total products in the inventory</p>
        </div>

        <div className="rounded-xl bg-blue-50 p-6">
          <h3 className="text-sm font-medium text-gray-600">Total Stock</h3>
          <p className="mt-2 text-3xl font-bold">
            {state.plants.reduce((acc, plant) => acc + (plant.quantityAvailable || 0), 0)}
          </p>
          <p className="mt-1 text-sm text-gray-500">Total stock available</p>
        </div>

        <div className="rounded-xl bg-green-50 p-6">
          <h3 className="text-sm font-medium text-gray-600">Out of Stock</h3>
          <p className="mt-2 text-3xl font-bold">
            {state.plants.filter((p) => !p.quantityAvailable).length}
          </p>
          <p className="mt-1 text-sm text-gray-500">Products currently out of stock</p>
        </div>

        
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Revenue by Product */}
        <div className="rounded-xl bg-white p-8 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl font-light text-gray-700">Top Products by Revenue</h2>
          <p className="mt-1 text-sm text-gray-500">Performance analysis of top 8 products</p>
          <div className="mt-8 h-[400px]">
            <ResponsiveContainer>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS[0]} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS[4]} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={COLORS[4]} stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fill: '#666' }}
                />
                <YAxis tick={{ fill: '#666' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue (₹)"
                  stroke={COLORS[4]}
                  fillOpacity={4}
                  fill="url(#colorRevenue)"
                />
                <Area
                  type="monotone"
                  dataKey="stock"
                  name="Stock"
                  stroke={COLORS[4]}
                  fillOpacity={4}
                  fill="url(#colorStock)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stock Status */}
        <div className="rounded-xl bg-white p-8 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl font-light text-gray-700">Stock Distribution</h2>
          <p className="mt-1 text-sm text-gray-500">Current inventory status</p>
          <div className="mt-8 h-[400px]">
            <ResponsiveContainer>
              <ComposedChart data={stockStatus}>
                <defs>
                  <linearGradient id="stockGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS[5]} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={COLORS[5]} stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#666' }}
                  angle={-25}
                  textAnchor="end"
                  height={60}
                />
                <YAxis tick={{ fill: '#666' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Legend />
                <Bar
                  dataKey="value"
                  name="Quantity"
                  fill="url(#stockGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  name="Trend"
                  stroke={COLORS[2]}
                  fill={COLORS[4]}
                  fillOpacity={0.3}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Price Distribution */}
        <div className="rounded-xl bg-white p-8 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl font-light text-gray-700">Price Analysis</h2>
          <p className="mt-1 text-sm text-gray-500">Product price range distribution</p>
          <div className="mt-8 h-[400px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={priceRanges}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={150}
                  dataKey="value"
                >
                  {priceRanges.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;