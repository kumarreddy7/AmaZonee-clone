import { useState } from "react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-dk-bg">
      {/* Sidebar */}
      <div className="w-64 bg-az-dark dark:bg-dk-surface text-white p-6 border-r border-gray-200 dark:border-dk-border">
        <h2 className="text-xl font-bold mb-8">Admin Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "overview" ? "bg-az-orange text-az-dark font-bold" : "hover:bg-gray-800 dark:hover:bg-dk-card"}`}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("products")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "products" ? "bg-az-orange text-az-dark font-bold" : "hover:bg-gray-800 dark:hover:bg-dk-card"}`}
            >
              Manage Products
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "orders" ? "bg-az-orange text-az-dark font-bold" : "hover:bg-gray-800 dark:hover:bg-dk-card"}`}
            >
              Manage Orders
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("users")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "users" ? "bg-az-orange text-az-dark font-bold" : "hover:bg-gray-800 dark:hover:bg-dk-card"}`}
            >
              Users
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === "overview" && (
            <div>
              <h1 className="text-3xl font-bold text-az-dark dark:text-white mb-8">System Overview</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-dk-surface p-6 rounded-lg shadow-sm border border-gray-200 dark:border-dk-border">
                  <h3 className="text-gray-500 dark:text-gray-400 font-medium">Total Revenue</h3>
                  <p className="text-3xl font-bold text-az-dark dark:text-white mt-2">₹14,50,000</p>
                </div>
                <div className="bg-white dark:bg-dk-surface p-6 rounded-lg shadow-sm border border-gray-200 dark:border-dk-border">
                  <h3 className="text-gray-500 dark:text-gray-400 font-medium">Orders Today</h3>
                  <p className="text-3xl font-bold text-az-dark dark:text-white mt-2">142</p>
                </div>
                <div className="bg-white dark:bg-dk-surface p-6 rounded-lg shadow-sm border border-gray-200 dark:border-dk-border">
                  <h3 className="text-gray-500 dark:text-gray-400 font-medium">Active Users</h3>
                  <p className="text-3xl font-bold text-az-dark dark:text-white mt-2">1,204</p>
                </div>
                <div className="bg-white dark:bg-dk-surface p-6 rounded-lg shadow-sm border border-gray-200 dark:border-dk-border">
                  <h3 className="text-gray-500 dark:text-gray-400 font-medium">Support Tickets</h3>
                  <p className="text-3xl font-bold text-az-dark dark:text-white mt-2">12</p>
                </div>
              </div>
              <div className="bg-white dark:bg-dk-surface p-6 rounded-lg shadow-sm border border-gray-200 dark:border-dk-border h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Sales Chart Placeholder</p>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-az-dark dark:text-white">Manage Products</h1>
                <button className="bg-az-yellow hover:bg-az-orange text-az-dark font-bold py-2 px-4 rounded transition-colors">
                  + Add Product
                </button>
              </div>
              <div className="bg-white dark:bg-dk-surface rounded-lg shadow-sm border border-gray-200 dark:border-dk-border overflow-hidden">
                <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                  <thead className="bg-gray-50 dark:bg-dk-card text-gray-700 dark:text-gray-200 font-bold uppercase">
                    <tr>
                      <th className="px-6 py-4">Product Name</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Stock</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-dk-border">
                    <tr className="hover:bg-gray-50 dark:hover:bg-dk-card">
                      <td className="px-6 py-4 font-medium text-az-dark dark:text-white">Sony WH-1000XM5</td>
                      <td className="px-6 py-4">Electronics</td>
                      <td className="px-6 py-4">₹24,990</td>
                      <td className="px-6 py-4 text-green-600">In Stock (42)</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:underline mr-4">Edit</button>
                        <button className="text-red-600 hover:underline">Delete</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-dk-card">
                      <td className="px-6 py-4 font-medium text-az-dark dark:text-white">Nike Air Force 1</td>
                      <td className="px-6 py-4">Fashion</td>
                      <td className="px-6 py-4">₹7,495</td>
                      <td className="px-6 py-4 text-orange-600">Low Stock (3)</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:underline mr-4">Edit</button>
                        <button className="text-red-600 hover:underline">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <h1 className="text-3xl font-bold text-az-dark dark:text-white mb-8">Recent Orders</h1>
              <div className="bg-white dark:bg-dk-surface p-8 rounded-lg border border-gray-200 dark:border-dk-border text-center">
                <p className="text-gray-500 dark:text-gray-400">Order management table coming soon.</p>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div>
              <h1 className="text-3xl font-bold text-az-dark dark:text-white mb-8">User Management</h1>
              <div className="bg-white dark:bg-dk-surface p-8 rounded-lg border border-gray-200 dark:border-dk-border text-center">
                <p className="text-gray-500 dark:text-gray-400">User management table coming soon.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
