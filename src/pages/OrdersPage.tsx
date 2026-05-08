import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";

export default function OrdersPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    api.getOrders().then((data: any) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-az-dark dark:text-white mb-8">Your Orders</h1>

      {loading ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : orders.length === 0 ? (
        <div className="bg-white dark:bg-dk-surface p-8 rounded-lg border border-gray-200 dark:border-dk-border text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">You have no orders yet.</p>
          <Link to="/products" className="inline-block bg-az-yellow hover:bg-az-orange text-az-dark font-bold py-2 px-6 rounded transition-colors">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white dark:bg-dk-surface rounded-lg border border-gray-200 dark:border-dk-border overflow-hidden shadow-sm">
              <div className="bg-gray-100 dark:bg-dk-card p-4 border-b border-gray-200 dark:border-dk-border flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div>
                  <span className="block font-medium">ORDER PLACED</span>
                  <span>{order.date}</span>
                </div>
                <div>
                  <span className="block font-medium">TOTAL</span>
                  <span>₹{order.total.toLocaleString()}</span>
                </div>
                <div className="ml-auto text-right">
                  <span className="block font-medium text-az-dark dark:text-white">ORDER # {order.id}</span>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View invoice</a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-az-dark dark:text-white">{order.status}</h3>
                <p className="text-sm text-gray-500 mb-4">Your order is being processed.</p>
                <div className="flex gap-4">
                  <button className="bg-az-yellow hover:bg-az-orange text-az-dark font-medium py-1 px-4 rounded text-sm transition-colors">
                    Track package
                  </button>
                  <button className="border border-gray-300 dark:border-dk-border hover:bg-gray-50 dark:hover:bg-dk-card text-az-dark dark:text-white font-medium py-1 px-4 rounded text-sm transition-colors">
                    View or edit order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
