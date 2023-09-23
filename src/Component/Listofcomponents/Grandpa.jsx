import Aunty from "./Aunty";
import Dad from "./dad";
import Uncle from "./uncle";
import "./Grandpa.css";
import { createContext } from "react";
import { useState } from "react";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  return (
    <div className=" grandpa">
      <h1>Grand Pa {money}</h1>
      <section className=" flex">
        <MoneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value="gold">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </AssetContext.Provider>
        </MoneyContext.Provider>
      </section>
    </div>
  );
};

export default Grandpa;
