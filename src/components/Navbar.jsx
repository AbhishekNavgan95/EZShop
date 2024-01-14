import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className=" bg-emerald-950 fixed z-10 w-full top-0 px-3">
      <nav className="flex justify-between items-center max-w-[1200px] py-5 px-2 mx-auto text-white text-2xl">
        <NavLink className="" to="/">
          <h3 className="text-4xl font-mono text-orange-500 font-bold ">
            EZShop
          </h3>
        </NavLink>
        <div className="flex gap-6 items-center transition-color duration-300 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 transition-color duration-300"
                : "text-white transition-color duration-300 hover:text-orange-500"
            }
            to="/"
          >
            <h4>Home</h4>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 transition-color duration-300 relative"
                : "text-white transition-color duration-300 hover:text-orange-500 relative"
            }
            to="/cart"
          >
            <h4>
              <AiOutlineShoppingCart />
            </h4>
            <div
              className={
                  cart.length > 0
                  ? "absolute bg-orange-500 px-2 rounded-full top-[-.5rem] right-[-.5rem] text-sm text-white" : "hidden"
              }
            >
              {cart.length}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
