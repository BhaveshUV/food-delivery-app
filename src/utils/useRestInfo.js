import { MENU_URL } from "./constant";
import { useState, useEffect } from "react";
import MOCK_REST_MENU from "../components/Mocks/RestMenuMockData.json";

const useRestInfo = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(MENU_URL + resId);
                const json = await data.json();
                console.log(json);
                let infoCard = json.data.cards.find(card => card.card.card.info);
                let restInfoCard = json.data.cards.find(card => card.groupedCard);
                let i = infoCard?.card?.card?.info;
                let r = restInfoCard?.groupedCard?.cardGroupMap?.REGULAR;
                if(!i || !r) {
                    throw new Error("Undefined data");
                }
                setRestInfo({
                    info: i,
                    restInfo: r,
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