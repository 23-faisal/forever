import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <div className="flex flex-col  sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-0 sm:mt-40 text-sm">
        <div>
          <Link to="/">
            <p className="logo  text-slate-950 text-2xl md:text-3xl lg:text-4xl mb-5">
              forever.
            </p>
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            neque, fugiat reiciendis expedita eaque iure tenetur cupiditate unde
            quo, animi inventore adipisci illum repellendus, ipsam saepe tempore
            labore incidunt sint!
          </p>
        </div>

        {/*  */}

        <div>
          <p className="uppercase text-xl font-medium mb-5 ">company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*  */}

        <div>
          <p className="uppercase text-xl font-medium mb-5">Get in touch</p>
          <div className="flex flex-col gap-1 text-gray-600">
            <p>contact@foreveryou.com</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/23.faisal_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500"
              >
                <FaInstagram className="w-6 h-6 cursor-pointer" />
              </a>
              <a
                href="https://x.com/faisalahmed_23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                <BsTwitterX className="w-6 h-6 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/faisalahmed23/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                <FaLinkedin className="w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright @{year} forever.com - All rights reserved.
        </p>
      </div>
      {/*  */}
    </div>
  );
};

export default Footer;
