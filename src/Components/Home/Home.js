import React from "react";
import styles from './Home.module.css'
import arrow from '../../Assets/arrow-down-icon.svg'

const Home = () => {
    return (
        <div className={styles['home-wrapper']}>
            {/*<div className={styles['home-container']}>*/}
            {/*    <h1>Власний бізнес з Ейвон</h1>*/}
            {/*    <p>Почни заробляти сьогодні з найуспішнішою косметичною компанією!</p>*/}
            {/*    <button>Приєднатися безкоштовно</button>*/}

            {/*</div>*/}
            <div className={styles['home-container']}>
                <h1>Власний бізнес з Ейвон</h1>
                <p>Почни заробляти сьогодні з найуспішнішою косметичною компанією!</p>
                <div className={styles['home-button-container']}>
                    <button>Приєднатися безкоштовно</button>
                    <img src={arrow} alt='arro-img'/>
                </div>
            </div>
        </div>
    )
}

export default Home