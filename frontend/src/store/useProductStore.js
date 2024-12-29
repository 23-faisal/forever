import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [
    {
      _id: "1",
      name: "Casual T-Shirt",
      price: 19.99,
      image: [
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
        "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1599012307536-78ccb4253705?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      category: "men",
      subcategory: "topwear",
    },
    {
      _id: "2",
      name: "Denim Jacket",
      price: 49.99,
      image: [
        "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
      ],
      category: "women",
      subcategory: "winterwear",
    },
    {
      _id: "3",
      name: "Summer Dress",
      price: 29.99,
      image: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
      ],
      category: "women",
      subcategory: "topwear",
    },
    {
      _id: "4",
      name: "Formal Shirt",
      price: 39.99,
      image: [
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
      ],
      category: "men",
      subcategory: "topwear",
    },
    {
      _id: "5",
      name: "Hoodie",
      price: 34.99,
      image: [
        "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
      ],
      category: "kids",
      subcategory: "winterwear",
    },
    {
      _id: "6",
      name: "Chinos Pants",
      price: 44.99,
      image: [
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
      ],
      category: "men",
      subcategory: "bottomwear",
    },
    {
      _id: "7",
      name: "Leather Jacket",
      price: 99.99,
      image: [
        "https://images.unsplash.com/photo-1453486030486-0a5ffcd82cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
      ],
      category: "men",
      subcategory: "winterwear",
    },
    {
      _id: "8",
      name: "Maxi Skirt",
      price: 24.99,
      image: [
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
      ],
      category: "women",
      subcategory: "bottomwear",
    },
    {
      _id: "9",
      name: "Graphic T-Shirt",
      price: 22.99,
      image: [
        "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
      ],
      category: "kids",
      subcategory: "topwear",
    },
    {
      _id: "10",
      name: "Sweater",
      price: 39.99,
      image: [
        "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
      ],
      category: "kids",
      subcategory: "winterwear",
    },
  ],
}));

export default useProductStore;
