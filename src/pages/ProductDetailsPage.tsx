import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import type { Product } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    let active = true;
    if (id) {
      api.getProductById(id).then((data) => {
        if (active) {
          setProduct(data || null);
          setLoading(false);
        }
      });
    }
    return () => { active = false; };
  }, [id]);

  if (loading) return <div className="p-8 text-center text-gray-500">Loading product details...</div>;
  if (!product) return <div className="p-8 text-center text-red-500">Product not found.</div>;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 dark:bg-dk-surface rounded-xl aspect-square flex items-center justify-center border border-gray-200 dark:border-dk-border">
          <span className="text-9xl">🛍️</span>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-az-dark dark:text-white">{product.name}</h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-az-dark dark:text-white">₹{product.price.toLocaleString()}</span>
            {product.rating && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">⭐ {product.rating} Rating</span>
            )}
          </div>
          <div className="border-t border-b border-gray-200 dark:border-dk-border py-4">
            <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Category: <span className="font-semibold text-az-dark dark:text-white">{product.category}</span>
          </div>
          <button
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
            className="w-full md:w-auto px-8 py-3 bg-az-yellow hover:bg-az-orange text-az-dark font-bold rounded-lg shadow-sm transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
