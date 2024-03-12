import { createContext } from "react";

const UserContext = createContext({
    username: "Default-name",
});

export default UserContext;