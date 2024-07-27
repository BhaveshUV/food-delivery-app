import React from "react";
import ItemsList from "./ItemsList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/appStore/cartSlice";
import Checkout from "./Checkout";

const Cart = () => {
    let cartItemsObj = useSelector(store => store.cart.items);
    let cartItems = Object.values(cartItemsObj);

    let dispatch = useDispatch();
    let handleClearCart = (e) => {
        e.target.style.transform = "scale(0.9)";
        setTimeout(() => {
            e.target.style.transform = "scale(1)";
        }, 50);
        dispatch(clearCart());
    }

    return (
        <div className="w-[90vw] md:w-[60vw] mx-auto my-2 pb-2 text-white flex flex-col gap-8">
            <div className="flex gap-2 justify-center relative">
                <span className="text-yellow-500 text-center text-2xl font-bold">Cart</span>
                <button onClick={(e) => handleClearCart(e)} className="bg-white text-black px-2 rounded-lg absolute right-0 h-full">Clear cart</button>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#fff2]">
                {!cartItems.length ? <div className="text-center">Your cart is empty!</ div> :
                    <ItemsList items={cartItems} />
                }
            </div>

            {cartItems.length > 0 ?
                <Checkout cartItems={cartItems} />
                : <></>
            }
        </div>
    );
};

export default Cart;