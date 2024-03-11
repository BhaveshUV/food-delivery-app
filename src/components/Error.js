import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="text-center p-4">
            <h3 className="text-2xl text-red-700 font-bold mb-2">Oops! Unable to load the page!</h3>
            <p className="text-yellow-500">{err.status}: {err.statusText}</p>
        </div>
    )
}

export default Error;