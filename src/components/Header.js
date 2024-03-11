import { LOGO_URL } from "../utils/constant";

export let Header = () => {
    return (
        <div className='flex justify-between items-center box-content h-28 px-8 py-2'>
            <div className='h-28 rounded-lg'>
                <img src={LOGO_URL} alt="LOGO"
                    className="basis-28 min-w-28 h-full rounded-lg"
                />
            </div>
            <ul className='text-white list-none flex gap-4 text-2xl px-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

export default Header;