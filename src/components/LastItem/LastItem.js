import React from "react";
import styles from "./lastItem.module.css";

const LastItem = (props) => {
    
    const { showMoreHandle } = props;

    return (
        <div className={styles.lastItem}>
            <div className={styles.lastItemBtn} onClick={ showMoreHandle }>
                <span className={styles.lastItemTitle}>
                    Show more
                </span>
            </div>
        </div>
    )

}

export default LastItem;
