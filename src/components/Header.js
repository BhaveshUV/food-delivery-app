import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export let Header = () => {
    let { username } = useContext(UserContext);
    return (
        <div className='flex justify-between items-center box-content h-28 px-8 py-2'>
            <div className='h-28 rounded-lg'>
                <img src={LOGO_URL} alt="LOGO"
                    className="basis-28 min-w-28 h-full rounded-lg"
                />
            </div>
            <ul className='text-white list-none flex gap-4 text-2xl px-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="text-lime-500"><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/cart">{`🛒`}</Link></li>
                <li>{username}</li>
            </ul>
        </div>
    );
}

export default Header;