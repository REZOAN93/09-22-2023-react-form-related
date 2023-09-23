import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const MyWife = () => {
    const data=useContext(AssetContext)
    return (
        <div>
            <h1>MY Wife: Sadia</h1>
            <h1>{data}</h1>
        </div>
    );
};

export default MyWife;