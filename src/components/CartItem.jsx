import React from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/silces/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('Item removed')
  };

  return (
    <div className="flex gap-5 p-3 py-10 border-b-2">
      <div>
        <img className="max-w-[150px]" src={item.image} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold  text-xl">{item.title}</h3>
        <h3 className="text-gray-700">{item.description.length > 10? item.description.slice(0, 100) + "..." : item.description  }</h3>
        <div className="py-2 flex justify-between">
          <p className="font-semibold text-xl">$ {item.price}</p>
          <button onClick={removeFromCart} className="text-2xl bg-green-900 hover:scale-105 transition-all duration-300 p-3 rounded-full text-white">
            <RiDeleteBin4Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
