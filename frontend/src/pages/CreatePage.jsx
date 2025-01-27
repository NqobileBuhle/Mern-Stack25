import React from 'react';
import { useState } from 'react';

const CreatePage = () => {
  const [newProduct,setNewProduct]=useState({
    name:"",
    price:"",
    image:"",
  })
  return (
    <div className='flex flex-col space-y-8'>
      <h1 className='text-2xl text-center mb-8 '>Create New Product</h1>
      <div className='bg-gray-300 p6 w-full rounded-lg shadow-md'>
        <div className='flex flex-col space-y-4'>
          <Input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
          required
          />

        </div>

      </div>
      
    </div>
  );
}

export default CreatePage;
