import { useSelector } from "react-redux";

const Checkout = ({ cartItems }) => {
    let cartFreqObj = useSelector(store => store.cart.freq);

    return (
        <>
            <div className="opacity-0 h-8"></div>
            <button className="bg-green-600 p-[1px] rounded-lg w-[90vw] md:w-[60vw] mx-auto fixed bottom-4">
                <div>Total ₹{cartItems.reduce((acc, curr) => (curr.card.info.price || curr.card.info.defaultPrice) * cartFreqObj[curr.card.info.id] / 100 + acc, 0)}</div>
                <div>Place Order</div>
            </button>
        </>
    )
}

export default Checkout;