import React, { useState } from "react";
import { useProductStore } from "../../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [feedback, setFeedback] = useState(""); // State to store success or error messages
  const [feedbackVisible, setFeedbackVisible] = useState(false); // State to control feedback visibility
  
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    setFeedback(message); // Display feedback message
    setFeedbackVisible(true); // Show feedback message
    if (success) {
      setNewProduct({ name: "", price: "", image: "" }); // Reset form on success

      // Hide the feedback message after 3 seconds
      setTimeout(() => {
        setFeedbackVisible(false);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-3xl text-center mb-8 text-purple-500 font-bold">Create New Product</h1>

      <div className="bg-blue-300 p-6 w-full max-w-md rounded-lg shadow-md">
        <div className="flex flex-col space-y-4">
          {/* Product Name */}
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            placeholder="Product Name"
            required
          />

          {/* Product Price */}
          <input
            type="number"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            placeholder="Price"
            required
          />

          {/* Product Image */}
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            placeholder="Image URL"
            required
          />

          {/* Submit Button */}
          <button
            className="bg-purple-300 text-gray-600 py-2 px-4 rounded-md w-full hover:bg-purple-500"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Feedback Message */}
      {feedbackVisible && (
        <div
          className={`text-center mt-4 px-4 py-2 rounded-md ${
            feedback.includes("successfully")
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-700"
          }`}
        >
          
          {feedback}
        </div>
      )}
    </div>
  );
};

export default CreatePage;
