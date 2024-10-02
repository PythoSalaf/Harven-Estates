import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { Logo } from "../assets";
import Button from "./Button";
const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative w-full bg-white shadow-lg">
      <div className="relative flex items-center justify-between py-3 layout">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[100px] md:w-[130px]" />
        </Link>

        <div className="items-center hidden md:flex gap-x-5">
          <NavLink to="/all-properties">All Properties</NavLink>
          <NavLink>Agents</NavLink>
          <NavLink>Blogs</NavLink>
        </div>
        <div className="items-center hidden md:flex gap-x-5">
          <div className="flex items-center gap-x-5">
            <Link>Sign in</Link>
            <Link>Sign up</Link>
          </div>
          <Button
            btnText="Find Properties"
            btnStyle="px-4 py-[6px] bg-primary text-white rounded-2xl"
            handleClick={() => navigate("/all-properties")}
          />
        </div>
        <div
          className="block cursor-pointer md:hidden"
          onClick={() => setIsToggle(!isToggle)}
        >
          {isToggle ? (
            <MdOutlineClose size={26} className="text-primary" />
          ) : (
            <MdOutlineMenu size={29} className="text-primary" />
          )}
        </div>
      </div>
      {isToggle && (
        <div className="absolute top-[3.2rem] w-full bg-primary h-52">
          <div className="flex flex-col pt-3 text-white layout gap-y-1">
            <Link onClick={() => setIsToggle(!isToggle)} className="text-lg ">
              All Properties
            </Link>
            <Link onClick={() => setIsToggle(!isToggle)} className="text-lg">
              Agents
            </Link>
            <Link onClick={() => setIsToggle(!isToggle)} className="text-lg">
              Blog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
