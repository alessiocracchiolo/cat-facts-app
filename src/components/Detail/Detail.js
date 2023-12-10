import React from "react";
import styles from "./detail.module.css";

const Detail = (props) => {

  const { selectedItem, detailImg, closeDetail } = props;

  return(

    <div className={styles.detaiContainer}>
      <div className={styles.detaiContent}>
        <div className={styles.closeBtn} onClick={closeDetail}>X</div>
        <img src={detailImg} alt="Cat Image" />
        <h2>{selectedItem.fact}</h2>
      </div>
    </div>
  )
}

export default Detail;