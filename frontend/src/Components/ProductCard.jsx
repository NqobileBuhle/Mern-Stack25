import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
import { useProductStore } from "../../store/product";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product
    
  );

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      toast.success("Product Deleted");
    } else {
      toast.error("Error: " + message);
    }
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = async (pid,updatedProduct) => {
     await updateProduct(pid,updatedProduct);
    const { success, message } = await updateProduct(product._id, updatedProduct);
    
    if (success) {
      toast.success("Product Updated");
      setIsModalOpen(false);
    } else {
      toast.error("Error: " + message);
    }
  };
  

  return (
    <div className="rounded-lg overflow-hidden hover:transform hover:scale-105 hover:border-2 border-gray-300 shadow-xl transition duration-300 ease-in-out p-4">
      <img
        className="h-[200px] w-full object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h3 className="text-sm mb-2">{product.name}</h3>
        <h3 className="font-bold text-xl text-gray-500 mb-4">R{product.price}</h3>
        <div className="flex justify-end space-x-4">
          <button className="text-blue-500 hover:text-blue-700 transition" onClick={handleEditClick}>
            <Edit size={20} />
          </button>
          <button className="text-red-500 hover:text-red-700 transition" onClick={() => handleDeleteProduct(product._id)}>
            <Trash size={20} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="flex flex-col items-center space-y-8">
          <div className="bg-blue-300 text-gray-300 p-6 w-full max-w-md rounded-lg shadow-md">
            <h2 className="text-3xl text-center mb-8 text-purple-500 font-bold">Edit Product</h2>
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Product Name"
            />
           
            <input
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Price"
            />
             <input
              type="number"
              name="image"
              value={updatedProduct.image}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Product image"
            />
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={()=>handleUpdateProduct(product._id,updatedProduct)}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
