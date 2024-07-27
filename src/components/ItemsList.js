import { CDN_URL } from "../utils/constant";
import { VegIcon, NonVegIcon } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/appStore/cartSlice";
import { useSelector } from "react-redux";

const ItemsList = ({ items }) => {
    let cartFreqObj = useSelector(store => store.cart.freq);

    let dispatch = useDispatch();
    let addToCartHandler = (dish) => {
        dispatch(addItem(dish));
    }
    let removeFromCartHandler = (index) => {
        dispatch(removeItem(index));
    }

    const clickAnimation = (e) => {
        e.target.parentElement.classList.toggle("scale-90");
        setTimeout(() => {
            e.target.parentElement.classList.toggle("scale-90");
        }, 50);
    }

    return (
        <div>
            {items.map((dish) => {
                return (
                    <div data-testid="foodItems" key={dish.card.info.id} className="py-4 border-gray-400 border-b-[1px] h-min">
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                            <div className="w-9/12">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    {(dish.card.info.isVeg === 1) ? <VegIcon /> : <NonVegIcon />}
                                </div>
                                <div className="text-white">{dish.card.info.name}</div>
                                <div className="text-sm text-white">₹{dish?.card?.info?.price / 100 || dish?.card?.info?.defaultPrice / 100 || ""}</div>
                                <div className="text-xs py-4 text-gray-400">{dish?.card?.info?.description}</div>
                            </div>
                            <div className="min-w-24 relative h-24 flex justify-center">
                                        <div className="flex justify-around bg-white text-green-700 text-sm font-bold w-24 px-4 py-2 rounded-lg absolute left-[50%] translate-x-[-50%] bottom-[-0.5rem] shadow-sm shadow-gray-400">
                                            {cartFreqObj[dish.card.info.id] === undefined ?
                                                <button className="px-2"
                                                    onClick={(e) => {
                                                        clickAnimation(e);
                                                        addToCartHandler(dish);
                                                    }}>ADD +</button>
                                                :
                                                <>
                                                    <button className="px-1"
                                                        onClick={(e) => {
                                                            clickAnimation(e);
                                                            removeFromCartHandler(dish);
                                                        }}>-</button>
                                                    {cartFreqObj[dish.card.info.id]}
                                                    <button className="px-1"
                                                        onClick={(e) => {
                                                            clickAnimation(e);
                                                            addToCartHandler(dish);
                                                        }}>+</button>
                                                </>
                                            }
                                        </div>
                                <img className="rounded-lg h-full" src={CDN_URL + dish?.card?.info?.imageId} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemsList;