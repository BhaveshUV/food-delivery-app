const ShimmerRest = () => {
    const dummyCat = [];
    for (let i = 0; i < 15; i++) {
        dummyCat.push(i);
    }

    return (
        <div className="w-[90vw] md:w-[60vw] m-auto text-white flex flex-col gap-8">
            <div className="rest-container h-28 bg-[#a9a9a9] flex justify-between "></div>
            <div className="menu">
                <div className="veg-nonVeg-toggle mb-2">
                    <div style={{ width: "3.5rem", height: "1.5rem", backgroundColor: "#a9a9a9" }}></div>
                </div>
                <hr />
                <div className="mx-auto my-2" style={{ width: "4rem", height: "1.8rem", backgroundColor: "#a9a9a9" }}></div>
                <div className="categories flex flex-col gap-2">
                    {dummyCat.map((categ) => {
                        return (
                            <div key={categ} id="categ" className="bg-[#ffffff30] p-4 cursor-pointer flex justify-between" style={{ backgroundColor: "#a9a9a9" }}>
                                <h4>{categ?.card?.card?.title}</h4>
                                <span style={{ height: "1rem" }}></span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default ShimmerRest;