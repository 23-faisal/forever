import useSearchStore from "@/store/useSearchStore";
import { useEffect, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, toggleShowSearch } = useSearchStore();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/collections")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location.pathname]);

  return showSearch && visible ? (
    <div className="border-t border-b border-slate-700 text-center flex items-center justify-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-inherit text-sm  "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearch className="w-6 h-6 cursor-pointer " />
      </div>
      <IoClose
        onClick={() => {
          toggleShowSearch();
          setSearch('');
        }}
        className="w-6 h-6 cursor-pointer "
      />

      {/*  */}
    </div>
  ) : (
    <></>
  );
};

export default SearchBar;
