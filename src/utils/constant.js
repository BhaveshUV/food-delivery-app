export const LOGO_URL = "https://img.freepik.com/free-vector/sticker-template-with-food-delivery-banner-isolated_1308-62732.jpg?w=740&t=st=1705576529~exp=1705577129~hmac=641de4625ac9c82c0e91f608c7c24bf5709aa6e2f4f1848243693d6e672cc1dc";
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const REST_LIST_API = "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.1582215%26lng%3D72.9597433%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING";
export const MENU_URL = "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D19.1582215%26lng%3D72.9597433%26restaurantId%3D";

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