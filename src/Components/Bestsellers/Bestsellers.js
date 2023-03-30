import React from "react";
import styles from './Bestsellers.module.css'

const Bestsellers = () => {
    return (
        <div className={styles['bestsellers-wrapper']}>
            <div className={styles['bestsellers-container']}>
                <h1>Наші бестселери</h1>
            </div>
        </div>
    )
}

export default Bestsellers