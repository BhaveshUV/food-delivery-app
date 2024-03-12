import ItemsList from "./ItemsList";

const RestaurantNestedCategoryUtil = ({ categ, isVeg, parentsVisibility, setShowIndex, itemsVisibility, setShowNestedIndex }) => {
    let items = categ?.itemCards?.filter((dish) => {
        if (isVeg) {
            return dish?.card?.info?.isVeg;
        }
        else {
            return dish;
        }
    })

    const handleClick = () => {
        setShowNestedIndex();
        if (!parentsVisibility) {
            setShowIndex();
        }
    };
    return (
        <>
            {items.length ?
                <>
                    <div id="categ" className="bg-[#ffffff30] p-4 cursor-pointer flex justify-between" onClick={handleClick}>
                        <h4 className="text-white text-lg font-semibold">{categ?.title} ({items.length})</h4>
                        <span>&#8597;</span>
                    </div>
                    {parentsVisibility && itemsVisibility && items.length && <ItemsList items={items} />}
                </> : <></>
            }
        </>
    );
}

export default RestaurantNestedCategoryUtil;