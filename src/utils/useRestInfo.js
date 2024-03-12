import { MENU_URL } from "./constant";
import { useState, useEffect } from "react";

const useRestInfo = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    const fetchData = async () => {
        const info = await fetch(MENU_URL + resId);
        const json = await info.json();
        // console.log(json);
        setRestInfo(json.data);
    }

    useEffect(() => {
        fetchData();
    }, [resId]);

    return restInfo;
}

export default useRestInfo;