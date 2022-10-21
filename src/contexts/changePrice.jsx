import { useContext, useState } from "react";
import { createContext } from "react";

const ChangePriceContext = createContext({});

export default function ChangePriceProvider({ children }) {
  const [priceChange, setPriceChange] = useState({
    st500: 0,
    bt500: 0,
    bt1000: 0,
    bt2000: 0,
    bt4000: 0,
    bt8000: 0,
    bt16000: 0,
    bt32000: 0,
    bt64000: 0,
    feed: 0,
  });

  const handleChangePrice = (key, value) => {
    const temp = priceChange;
    temp[key] = Number(value);

    setPriceChange(temp);
  };

  return (
    <ChangePriceContext.Provider value={{ priceChange, handleChangePrice }}>
      {children}
    </ChangePriceContext.Provider>
  );
}

export function useChangePrice() {
  const context = useContext(ChangePriceContext);
  const { priceChange, handleChangePrice } = context;
  return { priceChange, handleChangePrice };
}
