import { CDN_URL } from "../utils/constant";
import { VegIcon, NonVegIcon } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/appStore/cartSlice";

const ItemsList = ({ items, isCartItem }) => {
    let dispatch = useDispatch();
    let addToCartHandler = (dish) => {
        dispatch(addItem(dish));
    }
    let removeFromCartHandler = (index) => {
        dispatch(removeItem(index));
    }

    return (
        <div>
            {items.map((dish, index) => {
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
                                {
                                    isCartItem ?
                                        <button className="bg-white text-red-700 text-sm font-bold px-4 py-2 rounded-lg absolute left-[50%] translate-x-[-50%] bottom-[-0.5rem] w-max shadow-sm shadow-gray-400"
                                            onClick={() => removeFromCartHandler(index)}>
                                            REMOVE -
                                        </button> :
                                        <button className="bg-white text-green-700 text-sm font-bold px-4 py-2 rounded-lg absolute left-[50%] translate-x-[-50%] bottom-[-0.5rem] w-max shadow-sm shadow-gray-400"
                                            onClick={() => addToCartHandler(dish)}>
                                            ADD +
                                        </button>
                                }
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