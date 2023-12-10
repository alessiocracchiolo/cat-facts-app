import React from "react";
import styles from "./item.module.css";

const Item = (props) => {

    const { item, index, showDetail, getCatImageUrl } = props;

    const image = getCatImageUrl(index);
    
    return (
        <div key={index} className={styles.item} onClick={() => showDetail(item, image)}>
            <img src={image} alt="Cat Image" />
            <div className={styles.textContainer}>
                <span className={styles.itemTitle}>{item.fact}</span>
                <span className={styles.length}>{item.length}</span>
            </div>
        </div>
    )

}

export default Item;
