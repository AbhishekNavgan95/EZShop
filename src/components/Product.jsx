import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/silces/CartSlice"
import toast from "react-hot-toast";

const Product = ({ product }) => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success('Successfully toasted!')
  }

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("removed from cart")
  }

  return (
    <div className=" gap-4 max-w-full md:max-w-[270px] borde shadow-lg px-5 py-4 rounded-xl flex flex-col justify-between h-[100%] border md:hover:scale-105 transition-scale duration-200">
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">
          {product.title.length > 20
            ? product.title.slice(0, 20) + "..."
            : product.title}
        </h2>
        <h2>
          {product.description.length > 20
            ? product.description.slice(0, 50) + "..."
            : product.description}
        </h2>
      </div>
      <img
        className="max-w-[150px] mx-auto object-cover"
        src={product.image}
        alt=""
      />
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-xl">$ {product.price}</div>
        <div className="flex justify-between">
          <h5>⭐{product.rating.rate}</h5>
          <h5>total {product.rating.count} reviews</h5>
        </div>

            {
              cart.some((p) => p.id == product.id) ? 
              <button onClick={removeFromCart} className="border py-1 rounded-xl hover:bg-green-950 hover:text-white transition-all duration-300 shadow-md">
                Remove from cart
              </button> 
              :
              <button onClick={addToCart} className="border py-1 rounded-xl hover:bg-green-950 hover:text-white transition-all duration-300 shadow-md">
                Add to Cart
              </button> 
            }
      </div>
    </div>
  );
};

export default Product;
