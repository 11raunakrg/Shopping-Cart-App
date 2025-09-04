import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/header/cartTile";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart?.items?.length > 0) {
      setTotalCart(
        cart.items.reduce((acc, curr) => acc + Number(curr.price || 0), 0)
      );
    } else {
      setTotalCart(0);
    }
  }, [cart]);

  return (
    <>
      {cart.items.length > 0 ? (
        <div className="min-h-[80vh]">
          <div className="min-h-[50vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center p-3">
              {cart.items.map((cartItem) => (
                <CartTile key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
            <h1 className="text-xl font-semibold text-red-800">
              Your Cart Summary
            </h1>
            <p>
              <span className="text-gray-800 font-semibold">
                Total Items : {cart.items.length}
              </span>
            </p>

            <p>
              <span className="text-red-700 font-semibold">
                Total Price : {totalCart}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">
            Your Cart is Empty, please add products here.....
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-xl font-semibold rounded-lg px-5 py-3 mt-10 text-white cursor-pointer">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
