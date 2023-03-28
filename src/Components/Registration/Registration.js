import React from "react";
import styles from './Registration.module.css'
import registrationImg from '../../Assets/last-block-img.png'

const Registration = () => {
    const items = ['Ім’я', 'Прізвище', 'Email', 'Номер телефону']
    return (
        <div className={styles['registration-wrapper']}>
            <div className={styles['registration-container']}>
                <h1>Зроби красу своїм бізнесом</h1>
                <div className={styles['registration-block']}>
                    <div className={styles['registration-inputs']}>
                        {
                            items.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p>{item}</p>
                                        <input type='text'/>
                                    </div>
                                )
                            })
                        }
                        <button className={styles['registration-btn']}>Зареєструватися</button>
                    </div>
                    <img src={registrationImg} alt='registration-img'/>
                </div>
                {/*registration*/}
            </div>
        </div>
    )
}

export default Registration