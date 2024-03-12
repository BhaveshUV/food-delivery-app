import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { REST_LIST_API } from "../utils/constant";
import { Link } from "react-router-dom";

let searchFunc = undefined;

export let Body = () => {
    let [rests, setRests] = useState([]);
    let [searchTxt, setSearchTxt] = useState("");
    let [restsCopy, setRestsCopy] = useState([]);
    // console.log("RestsCopy: ", restsCopy);
    useEffect(() => {
        let action = (event) => {
            if (event.key === "Enter") {
                searchFunc();
                // console.log(event);
            }
        }
        window.addEventListener("keydown", action);
        fetchData?.();

        return () => {
            window.removeEventListener("keydown", action);
        }
    }, []);

    let fetchData = async () => {
        let data = await fetch(REST_LIST_API);
        let dataJson = await data.json();
        let restList = dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(restList);
        setRestsCopy(restList);
        setRests(restList);
    }

    if (rests.length === 0) {

        return (
            // html[0].style = "overflow: hidden",
            <div className='flex flex-col gap-8 px-[10vw]'>
                <div className="w-[100%] h-10 flex gap-2">
                    <input type="text" className="w-[100%] rounded-lg text-lg placeholder:px-1" placeholder='Search for restaurant, cuisine or a dish' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
                    <button className="rounded-md bg-gray-300 px-2">Search</button>
                </div>
                <div id="filter">
                    <button className="rounded-md bg-green-800 leading-8 text-white px-2">4+ Rating</button>
                </div>
                <div className='flex flex-wrap justify-center gap-8'>
                    <Shimmer />
                </div>
            </div>
        )
    }

    searchFunc = function () {
        let rests = restsCopy.filter(
            (rest) => {
                return (rest.info.name.toLowerCase().includes(searchTxt.toLowerCase()) || rest.info.cuisines.some(
                    (item) => {
                        return item.toLowerCase().includes(searchTxt.toLowerCase());
                    }
                ));
            }
        );
        if (rests.length !== 0) {
            setRests(rests);
        }
    }

    return (
        <div className='flex flex-col gap-8 px-[10vw]'>
            <div className="w-[100%] h-10 flex gap-2">
                <input type="text" className="w-[100%] rounded-lg text-lg placeholder:px-1" id="search" placeholder='Search for restaurant, cuisine or a dish' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
                <button id="searchBtn" className="rounded-md bg-gray-300 px-2" onClick={
                    () => {
                        searchFunc();
                    }
                }>Search</button>
            </div>
            <div id="filter" className="flex gap-2 items-center h-8">
                <button className="rounded-md bg-green-800 text-white px-2 h-full" onClick={
                    () => {
                        let filtered = rests.filter((rest) => rest.info.avgRating > 4)
                        setRests(filtered);
                    }
                }>4+ Rating</button>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                {rests.map((restaurant) => <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}><Card restaurant={restaurant} /></Link>)}
            </div>
        </div>
    );
}

export default Body;