import { useState, useMemo } from "react";

import { useChangePrice } from "../../contexts/changePrice";

import { formatInfo } from "../../util/utils";

import styles from "./styles.module.css";

export const PaymentTableRow = ({
  objectKey,
  selectedButton,
  editMode,
  data,
}) => {
  const { priceChange, handleChangePrice } = useChangePrice();
  const [price, setPrice] = useState(data.price);
  const [checked, setChecked] = useState(data.pago)
  
  const handleChange = (event) => {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    setPrice(event.target.value);
    handleChangePrice(objectKey, event.target.value);
  };

  const calculatedValues = useMemo(() => {

    const currentPrice = priceChange[objectKey] > 0 ? priceChange[objectKey] : parseFloat(price);

    const tax = (currentPrice * 0.2).toFixed(2);

    const caciquePercent = selectedButton === "cacique" ? 0.7 : 0.3;
    const masterPercent = selectedButton === "master" ? 0.7 : 0.3;

    if (data.id === 'feed') {
      return {
        tax,
        cacique: (0).toFixed(2),
        master: (currentPrice * 0.8).toFixed(2)
      };
    }

    return {
      tax,
      cacique: (currentPrice * 0.8 * caciquePercent).toFixed(2),
      master: (currentPrice * 0.8 * masterPercent).toFixed(2)
    };
  }, [price, priceChange, objectKey, selectedButton, data.id]);

  /*const handleCheckbox = () => {
    setChecked(!checked)
  }*/

  // var activeStyle = checked ? {backgroundColor: "#5BCB5F"} : { backgroundColor: "white" }


  return (
    <>
      {selectedButton === "cacique" && data.id === "feed" ? null : (
        <tr id={styles.tableRow}>
          {data.id !== "feed" ? (
            <td>
              {
                //editMode && 
                //<input id={objectKey} type="checkbox" onChange={handleCheckbox} checked={checked} style={{marginRight: "10px"}} />
              }
              {`${
              data.id.substring(0, 2) === "st" ? "Abaixo" : "Acima"
            } de ${formatInfo(data.id.substring(2))}`}</td>
          ) : (
            <td>Feed</td>
          )}
          <td id={styles.price}>
            <span>R$</span>
            <input
              type="number"
              disabled={!editMode}
              value={price}
              onChange={(event) => handleChange(event)}
              name="price"
            />
          </td>
          <td>{`R$ ${calculatedValues.tax}`}</td>
          <td>{`R$ ${calculatedValues.cacique}`}</td>
          <td>{`R$ ${calculatedValues.master}`}</td>
        </tr>
      )}
    </>
  );
};
