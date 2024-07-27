import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

export let Header = () => {
    const [logBtn, setLogBtn] = useState("Login");
    let { username } = useContext(UserContext);
    let cartItems = useSelector((store) => store.cart.items);
    let status = useOnlineStatus();

    const openMenu = () => {
        let list = document.getElementsByClassName("hamburgerMenu");
        list[0].classList.add("right-0");
        list[0].classList.remove("-right-24");
    }
    const closeMenu = () => {
        let list = document.getElementsByClassName("hamburgerMenu");
        list[0].classList.add("-right-24");
        list[0].classList.remove("right-0");
    }

    useEffect(() => {
        window.alert("Please install 'Allow CORS' extension to have dynamic experience");
    }, [])

    return (
        <div className='flex justify-between items-center box-content h-fit p-2 lg:px-8 lg:py-4'>
            <div className='rounded-lg '>
                <img src={LOGO_URL} alt="LOGO"
                    className="rounded-lg h-14 w-h-14 lg:h-28 lg:w-28"
                />
            </div>
            <div style={{ position: "absolute", top: 0, left: "50%", color: "white", transform: "translateX(-50%)" }}>
                Online Status: {status ? "✅" : "🔴"}
            </div>
            <div
                tabIndex={0}
                onBlur={closeMenu}
                className="box-content h-fit w-5 cursor-pointer p-2 py-3 bg-slate-400 rounded-md fixed z-10 right-2 lg:hidden"
                onClick={openMenu}>
                <img src="https://static-00.iconduck.com/assets.00/burger-menu-1-icon-2048x1521-ph48gq5y.png" alt="Hamburger-menu" />
            </div>
            <ul className={`hamburgerMenu transition-right ease-linear duration-100 text-left flex-col bg-black list-none fixed -right-24 top-0 flex z-10 lg:gap-4 lg:text-2xl lg:px-4 lg:static text-white lg:bg-transparent lg:flex-row`}
                onMouseDown={(e) => e.preventDefault()}>
                <li onClick={closeMenu} className="cursor-pointer bg-red-400 px-1 pb-[0.15rem] w-fit leading-none self-start m-1 lg:hidden">✖</li>
                <li onClick={closeMenu} className="px-3 lg:px-0 hover:underline lg:hover:no-underline"><Link to="/">Home</Link></li>
                <li onClick={closeMenu} className="px-3 lg:px-0 hover:underline lg:hover:no-underline"><Link to="/about">About</Link></li>
                <li onClick={closeMenu} className="px-3 lg:px-0 hover:underline lg:hover:no-underline"><Link to="/contact">Contact</Link></li>
                <li onClick={closeMenu} className="text-lime-500 hover:underline lg:hover:no-underline px-3 lg:px-0"><Link to="/grocery">Grocery</Link></li>
                <li onClick={closeMenu} className="text-nowrap px-3 hover:underline lg:hover:no-underline lg:px-0"><Link to="/cart">{`🛒` + Object.keys(cartItems).length}</Link></li>
                <li onClick={closeMenu} >{logBtn === "Login" ? <Link to="/login"><button className="hover:underline lg:hover:no-underline lg:bg-yellow-400 rounded-md px-4" onClick={() => setLogBtn("Logout")}>{logBtn}</button></Link> : <Link to="/"><button className="hover:underline lg:hover:no-underline lg:bg-yellow-400 rounded-md px-4" onClick={() => setLogBtn("Login")}>{logBtn}</button></Link>}</li>
                <li className="px-3 lg:px-0 border-t-2 border-neutral-500 lg:border-0">{username}</li>
            </ul>
        </div>
    );
}

export default Header;