import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GrUserManager } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useSearchStore from "@/store/useSearchStore";

const Navbar = () => {
  const { toggleShowSearch } = useSearchStore();

  return (
    <nav className="py-4">
      <div className="flex justify-between items-center">
        <NavLink
          className="logo text-slate-950 text-2xl md:text-3xl lg:text-4xl"
          to="/"
        >
          forever.
        </NavLink>

        {/* Desktop Menu */}
        <div className="text-md font-semibold hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="flex flex-col items-center">
                <p className="uppercase text-slate-800">Home</p>
                <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/collections" className="flex flex-col items-center">
                <p className="uppercase text-slate-800">Collections</p>
                <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="flex flex-col items-center">
                <p className="uppercase text-slate-800">Contact</p>
                <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="flex flex-col items-center">
                <p className="uppercase text-slate-800">About</p>
                <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <FaSearch
            className="w-5 h-5 cursor-pointer text-slate-800"
            onClick={toggleShowSearch} // Toggle search bar visibility
          />

          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <GrUserManager className="w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-36 flex flex-col gap-2 py-3 px-5 bg-slate-50 text-slate-600 font-semibold transition-all duration-300 ease-in-out">
                <p className="hover:text-black cursor-pointer">My Profile</p>
                <Link to="/orders" className="hover:text-black cursor-pointer">
                  Orders
                </Link>
                <p className="hover:text-black cursor-pointer">Logout</p>
              </PopoverContent>
            </Popover>
          </div>
          <Link className="relative" to="/cart">
            <FaShoppingCart className="w-5 h-5 cursor-pointer text-slate-800" />
            <div className="absolute -top-4 -right-4 bg-red-500 text-white w-6 h-6 flex justify-center items-center rounded-full">
              <p className="logo">{4}</p>
            </div>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden ml-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <IoMenu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="text-md font-semibold mt-10">
                  <ul className="flex flex-col gap-6">
                    <li>
                      <SheetClose asChild>
                        <NavLink to="/" className="flex flex-col items-center">
                          <p className="uppercase text-slate-800">Home</p>{" "}
                          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
                        </NavLink>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <NavLink
                          to="/collections"
                          className="flex flex-col items-center"
                        >
                          <p className="uppercase text-slate-800">
                            Collections
                          </p>
                          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
                        </NavLink>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <NavLink
                          to="/contact"
                          className="flex flex-col items-center"
                        >
                          <p className="uppercase text-slate-800">Contact</p>
                          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
                        </NavLink>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <NavLink
                          to="/about"
                          className="flex flex-col items-center"
                        >
                          <p className="uppercase text-slate-800">About</p>
                          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
                        </NavLink>
                      </SheetClose>
                    </li>
                  </ul>
                </div>
                <SheetFooter>
                  <SheetClose asChild></SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
