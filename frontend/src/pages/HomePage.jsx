import React from 'react';

const HomePage = () => {
  return (
    <div className='max-w-screen-xl'>
      <div className='space-y-8 text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center'>
           Current Products
           <p class="text-xl font-bold text-center text-gray-500">
  No products found{" "}
  <a 
    href="/create" 
    class="text-blue-500 hover:underline"
  >
    Create a product
  </a>
</p>

      </div>
    
    </div>
  );
}

export default HomePage;
