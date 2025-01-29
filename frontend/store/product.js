import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    // Check for required fields
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => null);
        return {
          success: false,
          message: error?.message || "Failed to create product. Please try again.",
        };
      }

      const data = await res.json();
      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: "Product created successfully." };
    } catch (err) {
      console.error("Error creating product:", err);
      return { success: false, message: "An error occurred. Please try again." };
    }
  },
  fetchProducts:async ()=>{
    const res=await fetch("/api/products");
    const data=await res.json();
    set({products:data.data})
  }
}));
