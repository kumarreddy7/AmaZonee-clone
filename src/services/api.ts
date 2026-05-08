// Mock API layer to simulate calls to a future Java Spring Boot + MySQL/MongoDB backend

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  rating?: number;
}

const MOCK_PRODUCTS: Product[] = [
  { id: "1", name: "Sony WH-1000XM5", price: 24990, description: "Noise cancelling headphones", category: "Electronics", rating: 4.8 },
  { id: "2", name: "Nike Air Force 1", price: 7495, description: "Classic sneakers", category: "Fashion", rating: 4.6 },
  { id: "3", name: "Kindle Paperwhite", price: 13999, description: "E-reader", category: "Electronics", rating: 4.7 },
  { id: "4", name: "Instant Pot Duo", price: 8999, description: "Pressure cooker", category: "Home", rating: 4.5 },
];

export const api = {
  async getProducts(searchQuery?: string, category?: string): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let results = MOCK_PRODUCTS;
        if (category && category !== "All") {
          results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
        }
        if (searchQuery) {
          results = results.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        resolve(results);
      }, 500);
    });
  },

  async getProductById(id: string): Promise<Product | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_PRODUCTS.find(p => p.id === id));
      }, 300);
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getOrders(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: "ORD-123", date: "2024-05-01", total: 24990, status: "Delivered" },
          { id: "ORD-124", date: "2024-05-15", total: 7495, status: "Shipped" }
        ]);
      }, 500);
    });
  },

  async getWishlist(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([MOCK_PRODUCTS[0], MOCK_PRODUCTS[2]]);
      }, 400);
    });
  }
};
