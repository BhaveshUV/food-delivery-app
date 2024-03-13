import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

export let Header = () => {
    const [logBtn, setLogBtn] = useState("Login")
    let { username } = useContext(UserContext);
    let cartItems = useSelector((store) => store.cart.items);
    let status = useOnlineStatus();

    return (
        <div className='flex justify-between items-center box-content h-28 px-8 py-2'>
            <div className='h-28 rounded-lg'>
                <img src={LOGO_URL} alt="LOGO"
                    className="basis-28 min-w-28 h-full rounded-lg"
                />
            </div>
            <div style={{ position: "absolute", top: 0, left: "50%", color: "white", transform: "translateX(-50%)" }}>
                Online Status: {status ? "✅" : "🔴"}
            </div>
            <ul className='text-white list-none flex gap-4 text-2xl px-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="text-lime-500"><Link to="/grocery">Grocery</Link></li>
                <li className="text-nowrap"><Link to="/cart">{`🛒` + cartItems.length}</Link></li>
                <li>{logBtn === "Login" ? <Link to="/login"><button className="bg-yellow-400 rounded-md px-4" onClick={() => setLogBtn("Logout")}>{logBtn}</button></Link> : <Link to="/"><button className="bg-yellow-400 rounded-md px-4" onClick={() => setLogBtn("Login")}>{logBtn}</button></Link>}</li>
                <li>{username}</li>
            </ul>
        </div>
    );
}

export default Header;