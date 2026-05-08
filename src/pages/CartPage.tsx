import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-az-dark dark:text-white mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="bg-white dark:bg-dk-surface p-8 rounded-lg border border-gray-200 dark:border-dk-border text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Your cart is empty.</p>
          <Link to="/products" className="inline-block bg-az-yellow hover:bg-az-orange text-az-dark font-bold py-2 px-6 rounded transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white dark:bg-dk-surface p-4 rounded-lg border border-gray-200 dark:border-dk-border flex gap-4">
                <div className="w-24 h-24 bg-gray-100 dark:bg-dk-card rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🛍️</span>
                </div>
                <div className="flex-1">
                  <Link to={`/product/${item.id}`} className="text-lg font-semibold text-az-dark dark:text-white hover:text-az-orange">
                    {item.name}
                  </Link>
                  <div className="font-bold text-lg mt-1 dark:text-white">₹{item.price.toLocaleString()}</div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border border-gray-300 dark:border-dk-border rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-dk-border transition-colors dark:text-white"
                      >-</button>
                      <span className="px-3 py-1 border-x border-gray-300 dark:border-dk-border dark:text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-dk-border transition-colors dark:text-white"
                      >+</button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-80">
            <div className="bg-white dark:bg-dk-surface p-6 rounded-lg border border-gray-200 dark:border-dk-border sticky top-24">
              <h2 className="text-xl font-bold mb-4 dark:text-white">Order Summary</h2>
              <div className="flex justify-between mb-2 text-gray-600 dark:text-gray-400">
                <span>Items ({cartCount}):</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-400">
                <span>Delivery:</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="border-t border-gray-200 dark:border-dk-border pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold dark:text-white">
                  <span>Order Total:</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full bg-az-yellow hover:bg-az-orange text-az-dark font-bold py-3 rounded-lg shadow-sm transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
