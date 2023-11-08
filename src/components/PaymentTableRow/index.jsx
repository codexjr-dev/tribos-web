import { useState } from "react";

import { useChangePrice } from "../../contexts/changePrice";

import { formatInfo } from "../../util/aux";

import styles from "./styles.module.css";

export const PaymentTableRow = ({
  objectKey,
  selectedButton,
  editMode,
  data,
}) => {
  const { handleChangePrice } = useChangePrice();
  const [price, setPrice] = useState(data.price);
  const [checked, setChecked] = useState(data.pago)
  
  const handleChange = (event) => {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    setPrice(event.target.value);
    handleChangePrice(objectKey, event.target.value);
  };

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
          <td>{`R$ ${data.tax}`}</td>
          <td>{`R$ ${data.cacique}`}</td>
          <td>{`R$ ${data.master}`}</td>
        </tr>
      )}
    </>
  );
};
