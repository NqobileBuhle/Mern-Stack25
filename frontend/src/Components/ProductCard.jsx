import React from "react";
import { Edit, Trash } from "lucide-react";
import { useProductStore } from "../../store/product";
import { toast } from "react-toastify";


const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
//   const { toast } = useToast();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    if (success) {
      toast({ title: "Product Deleted", description: message, status: "success" });
    } else {
      toast({ title: "Error", description: message, status: "error" });
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
          <button className="text-blue-500 hover:text-blue-700 transition">
            <Edit size={20} />
          </button>
          <button
            className="text-red-500 hover:text-red-700 transition"
            onClick={() => handleDeleteProduct(product._id)}
          >
            <Trash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
