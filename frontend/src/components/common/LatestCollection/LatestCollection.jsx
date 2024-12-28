import { useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import Title from "../Title/Title";

const products = [
  {
    _id: "1",
    name: "Casual T-Shirt",
    price: 19.99,
    image: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "2",
    name: "Denim Jacket",
    price: 49.99,
    image: [
      "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "3",
    name: "Summer Dress",
    price: 29.99,
    image: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "4",
    name: "Formal Shirt",
    price: 39.99,
    image: [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "5",
    name: "Hoodie",
    price: 34.99,
    image: [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "6",
    name: "Chinos Pants",
    price: 44.99,
    image: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "7",
    name: "Leather Jacket",
    price: 99.99,
    image: [
      "https://images.unsplash.com/photo-1453486030486-0a5ffcd82cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
    ],
  },
  {
    _id: "8",
    name: "Maxi Skirt",
    price: 24.99,
    image: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
    ],
  },
  {
    _id: "9",
    name: "Graphic T-Shirt",
    price: 22.99,
    image: [
      "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
    ],
  },
  {
    _id: "10",
    name: "Sweater",
    price: 39.99,
    image: [
      "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
    ],
  },
  {
    _id: "11",
    name: "Sports Shorts",
    price: 19.99,
    image: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "12",
    name: "Blazer",
    price: 89.99,
    image: [
      "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "13",
    name: "Cargo Pants",
    price: 34.99,
    image: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "14",
    name: "Cardigan",
    price: 29.99,
    image: [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "15",
    name: "Polo Shirt",
    price: 24.99,
    image: [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "16",
    name: "Jeans",
    price: 49.99,
    image: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
    ],
  },
  {
    _id: "17",
    name: "Tracksuit",
    price: 59.99,
    image: [
      "https://images.unsplash.com/photo-1453486030486-0a5ffcd82cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
    ],
  },
  {
    _id: "18",
    name: "Winter Coat",
    price: 129.99,
    image: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
    ],
  },
  {
    _id: "19",
    name: "Flannel Shirt",
    price: 34.99,
    image: [
      "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
    ],
  },
  {
    _id: "20",
    name: "Swimwear",
    price: 19.99,
    image: [
      "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHwy",
    ],
  },
];

const LatestCollection = () => {
  const [latestProducts] = useState(products.slice(0, 10));

  console.log(latestProducts);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={"LATEST"} text2={"collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente
          nesciunt, ducimus cumque blanditiis corrupti nihil illo dolor labore
          perferendis culpa quas atque eveniet officiis voluptas aliquid vero
          provident possimus?
        </p>
      </div>
      {/* latest product */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.length > 0 &&
          latestProducts.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default LatestCollection;
