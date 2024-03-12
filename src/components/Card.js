import { CDN_URL } from "../utils/constant";

export let Card = (props) => {
    let { restaurant } = props;
    let { info } = restaurant;
    return (
        <div className='w-64 max-w-60 flex flex-col flex-grow p-2 rounded-md hover:bg-yellow-500 hover:shadow-md'>
            <div className="h-40 bg-cover rounded-md bg-center" style={{ backgroundImage: `url(${CDN_URL + info.cloudinaryImageId})` }}>
            </div>
            <div className="flex justify-between items-center">
                <span className="my-2 text-[1.1rem] font-semibold text-white">{info?.name}</span>
                <button className="leading-5 min-w-11 rounded-2xl bg-green-800">{info?.avgRating}&#9733;</button>
            </div>
            <span className="text-yellow-700">{info?.cuisines.join(", ")}</span>
        </div>
    );
}

export default Card;