export default function SellerPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-az-dark dark:text-white">Seller Central</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your inventory, pricing, and orders.</p>
        </div>
        <button className="bg-az-yellow hover:bg-az-orange text-az-dark font-bold py-2 px-6 rounded-lg transition-colors shadow-sm">
          Add New Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-dk-surface p-6 rounded-xl border border-gray-200 dark:border-dk-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-500 dark:text-gray-400">Total Sales</h3>
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">↑ 12%</span>
          </div>
          <p className="text-4xl font-black text-az-dark dark:text-white">₹8,45,230</p>
          <p className="text-sm text-gray-400 mt-2">In the last 30 days</p>
        </div>

        <div className="bg-white dark:bg-dk-surface p-6 rounded-xl border border-gray-200 dark:border-dk-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-500 dark:text-gray-400">Active Listings</h3>
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">4 Pending</span>
          </div>
          <p className="text-4xl font-black text-az-dark dark:text-white">142</p>
          <p className="text-sm text-gray-400 mt-2">Across 3 categories</p>
        </div>

        <div className="bg-white dark:bg-dk-surface p-6 rounded-xl border border-gray-200 dark:border-dk-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-500 dark:text-gray-400">Customer Rating</h3>
            <span className="text-az-orange text-lg">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-4xl font-black text-az-dark dark:text-white">4.8</p>
          <p className="text-sm text-gray-400 mt-2">Based on 1,240 reviews</p>
        </div>
      </div>

      <div className="bg-white dark:bg-dk-surface rounded-xl border border-gray-200 dark:border-dk-border overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-dk-border flex justify-between items-center bg-gray-50 dark:bg-dk-card">
          <h2 className="text-xl font-bold text-az-dark dark:text-white">Recent Orders</h2>
          <button className="text-blue-600 hover:underline text-sm font-medium">View All Orders</button>
        </div>
        <div className="p-6 text-center text-gray-500 dark:text-gray-400">
          <p className="mb-4">No recent orders to display.</p>
          <button className="border border-gray-300 dark:border-dk-border hover:bg-gray-50 dark:hover:bg-dk-card text-az-dark dark:text-white font-medium py-2 px-4 rounded text-sm transition-colors">
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}
