import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalamount] = useState(0);

  useEffect(() => {
    setTotalamount(cart.reduce((acc, currVal) => acc + currVal.price, 0));
  }, [cart]);

  return (
    <div className="max-w-[1200px] mx-auto my-20">
      <div className="flex flex-col-reverse md:flex-row justify-center px-3 items-start md:py-5 w-full md:gap-5">
        <div className="w-full py-10">
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} itemIndex={item.index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 justify-center  min-h-[80vh]">
              <h2 className="text-3xl font-semibold">No items in cart</h2>
              <Link to="/">
                <button className="border hover:bg-green-950 px-5 text-xl rounded-full hover:text-white transition-all duration-300 py-1 w-full">
                  Continue shopping
                </button>
              </Link>
            </div>
          )}
        </div>
         <div className="flex flex-col gap-5 nd:items-center justify-around px-5 md:h-[80vh] pt-10 md:py-10 md:sticky top-0 w-full">
          <div>
            <div className="text-3xl text-semibold text-green-950 text-center md:text-start">Your cart</div>
            <div className="text-6xl font-black text-green-800 text-center md:text-start">Summary</div>
          </div>
          <div>
            <p className="text-xl text-center md:text-start">Total items : 
              <span className="font-bold px-2">{cart.length}</span>
            </p>
            <p className="text-xl text-center md:text-start">Total ammount :
              <span className="font-bold px-2 ">$ {totalAmount.toFixed(2)}</span>
            </p>
            <button className="my-3 border hover:bg-green-950 px-5 rounded-full hover:text-white transition-all duration-300 py-1 w-full"> Check out now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
