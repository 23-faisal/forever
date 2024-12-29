import SingleProduct from "@/components/common/SingleProduct/SingleProduct";
import Title from "@/components/common/Title/Title";
import useSearchStore from "@/store/useSearchStore";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const products = [
  {
    _id: "1",
    name: "Casual T-Shirt",
    price: 19.99,
    image: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D",
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
];

const CollectionPage = () => {
  const [allProducts] = useState(products);
  const { search, showSearch } = useSearchStore();

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  useEffect(() => {
    let sortedProducts = [...allProducts].filter(
      (product) =>
        (category.length === 0 || category.includes(product.category)) &&
        (subCategory.length === 0 ||
          subCategory.includes(product.subcategory)) &&
        (search === "" ||
          product.name.toLowerCase().includes(search.toLowerCase()))
    );

    if (sortOption === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(sortedProducts);
  }, [category, subCategory, sortOption, allProducts, search, showSearch]);

  const toggleCategory = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      setCategory([...category, e.target.value]);
    } else {
      setCategory(category.filter((cat) => cat !== e.target.value));
    }
  };

  const toggleSubCategory = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      setSubCategory([...subCategory, e.target.value]);
    } else {
      setSubCategory(subCategory.filter((sub) => sub !== e.target.value));
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200">
      {/* filters / left side */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase"
        >
          Filters{" "}
          {showFilter ? (
            <FaArrowUp className={`w-6 h-6 block sm:hidden`} />
          ) : (
            <FaArrowDown className={`w-6 h-6 block sm:hidden`} />
          )}
        </p>

        {/* category */}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="uppercase mb-3 text-sm font-medium ">categories</p>

          <div className="capitalize flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="men"
                checked={category.includes("men")}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="women"
                checked={category.includes("women")}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="kids"
                checked={category.includes("kids")}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* sub category */}

        <div
          className={`border border-gray-300 pl-5 py-3 my-6 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="uppercase mb-3 text-sm font-medium ">type</p>

          <div className="capitalize flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="topwear"
                checked={subCategory.includes("topwear")}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="bottomwear"
                checked={subCategory.includes("bottomwear")}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="winterwear"
                checked={subCategory.includes("winterwear")}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>

        {/*  */}
      </div>

      {/* products / right side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 ">
          <Title text1={"all"} text2={"collections"} />
          {/* product sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            name="Sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevant">Relevant</option>
            <option value="lowToHigh">Price: Low To High</option>
            <option value="highToLow">Price: High To Low</option>
          </select>
        </div>

        {/* map products  */}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 &&
            filterProducts.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))}
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default CollectionPage;
