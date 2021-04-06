import React, { useState, useContext } from "react";
import styles from "../styles/Check.module.css";
import {checkedContext} from "../contexts/checkedContext"

let I = 0
const Check = ({ title, image}) => {
  const {setProgressValue} = useContext(checkedContext)
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    if(checked === true) {
      I = I - 1
      setProgressValue(I)
    }
    else {
      I = I + 1
      setProgressValue(I)
    }
    setChecked(!checked)

  };

  return (
    <div
      id={styles.check}
      className={checked ? styles.checked : styles.unchecked}
      onClick={handleChange}
    >
      <div className={styles.checkbox_container}>
        <div
          id={styles.checkbox}
          //{checked ? styles.box_checked : styles.box_unchecked}
          className={checked ? styles.box_checked : styles.box_unchecked}
        >
          <img
            id={styles.checkmark}
            className={checked ? styles.checkmark_on : styles.checkmark_off}
            src="https://warmseal-windows.co.uk/wp-content/uploads/2016/11/white-tick2.png"
            alt=""
          />
        </div>
      </div>
      <label className={styles.label}>
        <img draggable="false" className={styles.img} src={image} alt={title} />
        <p className={styles.title}>{title}</p>
      </label>
    </div>
  );
};

export default Check;
