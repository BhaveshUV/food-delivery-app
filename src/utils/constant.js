export const LOGO_URL = "https://img.freepik.com/free-vector/sticker-template-with-food-delivery-banner-isolated_1308-62732.jpg?w=740&t=st=1705576529~exp=1705577129~hmac=641de4625ac9c82c0e91f608c7c24bf5709aa6e2f4f1848243693d6e672cc1dc";
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const REST_LIST_API = "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1582215&lng=72.9597433&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const MENU_URL = "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1582215&lng=72.9597433&restaurantId=";

export const VegIcon = () => {
    return (
        <div style={{ height: "0.8rem", width: "0.8rem", border: "1px solid green", display: "inline-flex", justifyContent: "center", alignItems: "center", marginRight: "0.5rem", lineHeight: "1" }}>
            <div style={{ height: "0.5rem", width: "0.5rem", borderRadius: "50%", backgroundColor: "green" }}></div>
        </div>
    )
}
export const NonVegIcon = () => {
    return (
        <div style={{ height: "0.8rem", width: "0.8rem", border: "1px solid red", display: "inline-flex", justifyContent: "center", alignItems: "center", marginRight: "0.5rem", lineHeight: "1" }}>
            <div style={{ height: "0.5rem", width: "0.5rem", borderRadius: "50%", backgroundColor: "red" }}></div>
        </div>
    )
}