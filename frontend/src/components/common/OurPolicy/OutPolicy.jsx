import { FcProcess, FcExport, FcAssistant } from "react-icons/fc";

const OutPolicy = () => {
  return (
    <div className="py-10">
      <div className="  flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <FcProcess className="w-12 h-12 m-auto mb-5" />

        <p className="font-semibold capitalize">Easy exchange policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy. </p>
      </div>
      <div>
        <FcExport className="w-12 h-12 m-auto mb-5" />

        <p className="font-semibold capitalize">7 days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy. </p>
      </div>
      <div>
        <FcAssistant className="w-12 h-12 m-auto mb-5" />

        <p className="font-semibold capitalize">best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support </p>
      </div>
    </div>
    </div>
  );
};

export default OutPolicy;
