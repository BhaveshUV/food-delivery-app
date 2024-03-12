import RestaurantNestedCategoryUtil from "./RestaurantNestedCategoryUtil";
import { useState } from "react";

const RestaurantNestedCategory = ({ categ, isVeg, parentsVisibility, setShowIndex }) => {
    const [showNestedIndex, setShowNestedIndex] = useState(null);

    return (
        <div>
            <div id="categ" className="bg-[#ffffff30] p-4 cursor-pointer flex justify-between">
                <h4 className="text-[#daa520] text-xl font-semibold">{categ?.card?.card?.title}</h4>
                <span>&#8597;</span>
            </div>
            {categ?.card?.card?.categories?.map((categ, index) => {
                return <RestaurantNestedCategoryUtil key={categ?.title} categ={categ} isVeg={isVeg} parentsVisibility={parentsVisibility} setShowIndex={setShowIndex} itemsVisibility={showNestedIndex === index} setShowNestedIndex={() => setShowNestedIndex(showNestedIndex === index ? null : index)}  />
            })}
        </div>
    );
}

export default RestaurantNestedCategory;