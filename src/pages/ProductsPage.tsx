import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { api } from "../services/api";
import type { Product } from "../services/api";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "All";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    api.getProducts(query, category).then((data) => {
      if (active) {
        setProducts(data);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, [query, category]);

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-az-dark dark:text-white mb-6">
        Products {query && `matching "${query}"`} {category !== "All" && `in ${category}`}
      </h1>

      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-dk-surface border border-gray-200 dark:border-dk-border rounded-lg p-4 shadow-sm">
              <div className="h-40 bg-gray-100 dark:bg-dk-card mb-4 rounded flex items-center justify-center">
                <span className="text-4xl">🛍️</span>
              </div>
              <Link to={`/product/${product.id}`} className="hover:text-az-orange">
                <h3 className="font-semibold text-lg text-az-dark dark:text-white line-clamp-1">{product.name}</h3>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.category}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-az-dark dark:text-white">₹{product.price.toLocaleString()}</span>
                {product.rating && (
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">⭐ {product.rating}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
