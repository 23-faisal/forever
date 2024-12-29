import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { _id, name, price, image } = product;

  const currency = "$";

  return (
    <Link className="text-gray-700 cursor-pointer " to={`/product/${_id}`}>
      <div className=" overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out h-60 w-full object-cover"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm  "> {name}</p>
      <p className="text-sm font-medium ">
        {currency} {price}
      </p>
    </Link>
  );
};

export default SingleProduct;
