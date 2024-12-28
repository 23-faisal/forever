import SingleProduct from "../SingleProduct/SingleProduct";
import Title from "../Title/Title";

const bestSeller = [
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
];

const BestSeller = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={"best"} text2={"sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          perspiciatis consequatur.
        </p>
      </div>

      {/* best selling product */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.length > 0 &&
          bestSeller.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
