import { MENU_URL } from "./constant";
import { useState, useEffect } from "react";
import MOCK_REST_MENU from "../components/Mocks/RestMenuMockData.json";

const useRestInfo = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    const fetchData = async () => {
        try{
            const info = await fetch(MENU_URL + resId);
            const json = await info.json();
            // console.log(json);
            setRestInfo(json.data);
        } catch(e) {
            setRestInfo(MOCK_REST_MENU.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [resId]);

    return restInfo;
}

export default useRestInfo;