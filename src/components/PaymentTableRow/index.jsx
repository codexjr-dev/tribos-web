import styles from "./styles.module.css";
import { formatInfo } from "../../util/aux";
import { useState, useEffect } from "react";
import { useChangePrice } from "../../contexts/changePrice";

export const PaymentTableRow = ({
  objectKey,
  selectedButton,
  editMode,
  data,
}) => {
  const [price, setPrice] = useState(data.price);

  const { priceChange, handleChangePrice } = useChangePrice();

  // useEffect(() => {
  //   console.log(priceChange);
  // }, [priceChange]);

  const handleChange = (event) => {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    setPrice(event.target.value);
    handleChangePrice(objectKey, event.target.value);
  };

  return (
    <>
      {selectedButton === "cacique" && data.id === "feed" ? null : (
        <tr id={styles.tableRow}>
          {data.id !== "feed" ? (
            <td>{`${
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
          <td>{`R$ ${data.tax}`}</td>
          <td>{`R$ ${data.cacique}`}</td>
          <td>{`R$ ${data.master}`}</td>
        </tr>
      )}
    </>
  );
};
