import { MENU_URL } from "./constant";
import { useState, useEffect } from "react";
import MOCK_REST_MENU from "../components/Mocks/RestMenuMockData.json";

const useRestInfo = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await fetch(MENU_URL + resId);
                const json = await info.json();
                console.log(json);
                setRestInfo({
                    info: json.data.cards[2]?.card?.card?.info,
                    restInfo: json.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
                });
            } catch (e) {
                console.log(MOCK_REST_MENU);
                setRestInfo({
                    info: MOCK_REST_MENU.data.cards[0]?.card?.card?.info,
                    restInfo: MOCK_REST_MENU.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                });
            }
        }
        fetchData();
    }, [resId]);

    return restInfo;
}

export default useRestInfo;