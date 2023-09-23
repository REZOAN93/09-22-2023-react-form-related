import { useContext } from "react";
import { MoneyContext } from "./Grandpa";

const Cousin = ({ cousinname }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1>Name: {cousinname}</h1>
      <h1>{money}</h1>
      <button onClick={() => setMoney(money + 1000)}>Add 1000 Taka</button>
    </div>
  );
};

export default Cousin;
