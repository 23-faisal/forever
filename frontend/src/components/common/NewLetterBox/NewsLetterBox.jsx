import { useState } from "react";

const NewsLetterBox = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submit
  };
  return (
    <div className="text-center my-10">
      <p className="capitalize text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
        voluptatem mollitia nesciunt adipisci cumque iste architecto quas nulla.
        Sit maiores consequuntur minus suscipit.
      </p>
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full sm:w-1/2 mx-auto   items-center gap-3 my-6 border pl-3 "
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none py-2"
          required
        />
        <button
          type="submit"
          className="uppercase text-white bg-black px-10 py-4 text-xs sm:text-sm"
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
