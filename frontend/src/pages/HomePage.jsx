import React, { useEffect } from 'react';
import { useProductStore } from '../../store/product';
import ProductCard from '../Components/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, [fetchProducts]);

  console.log("products", products); // Debug to ensure products are being fetched

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="space-y-8 text-lg font-bold bg-gradient-to-r from-red-600 via-pink-400 to-pink-200 bg-clip-text text-transparent  p-4">
        <h1 className='text-3xl text-left py-8'>Current Products 📌</h1>

        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-xl font-bold text-center text-gray-500">
            No products found 🥺{" "}
            <a href="/create" className="text-pink-500 hover:underline">
              Create a product
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
