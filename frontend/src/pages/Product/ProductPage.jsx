import useProductStore from "@/store/useProductStore";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const { products } = useProductStore();
  const [productData] = products.filter((product) => product._id === productId);
  return productData ? (
    <>
      <div className="border-t-2   pt-10 transition-opacity ease-in duration-200 opacity-100 ">
        {/* product data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">

            </div>
          </div>

          {/*  */}
        </div>

        {/*  */}
      </div>
    </>
  ) : (
    <></>
  );
};

export default ProductPage;
