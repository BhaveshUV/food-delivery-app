import ItemsList from "./ItemsList";

const RestaurantCategory = ({ categ, isVeg, itemsVisibility, setShowIndex }) => {
    let items = categ?.itemCards?.filter((dish) => {
        if (isVeg) {
            return dish?.card?.info?.isVeg;
        }
        else {
            return dish;
        }
    })

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <>
            {items.length ? 
                <>
                    <div id="categ" className="bg-[#ffffff30] p-4 cursor-pointer flex justify-between" onClick={handleClick}>
                        <h4 className="text-[#daa520] text-xl font-semibold">{categ?.title} ({items.length})</h4>
                        <span>&#8597;</span>
                    </div>
                    {itemsVisibility && items.length && <ItemsList items={items}/>}
                </> : <></>
            }
        </>
    );
}

export default RestaurantCategory;