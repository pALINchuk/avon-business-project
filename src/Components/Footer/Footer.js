import React from "react";
import styles from './Footer.module.css'
import logo from '../../Assets/logo-avon.svg'
// import telegramIcon from '../../Assets/telegram-icon.svg'
import facebookIcon from '../../Assets/facebook-icon.svg'
// import instagramIcon from '../../Assets/instagram-icon.svg'

const Footer = () => {
    const linkItems = ['Домашня', 'Про нас', 'Почати бізнес', 'Бестселери']
    const iconItems = [facebookIcon]
    return (
        <div className={styles['footer-wrapper']}>
            <div className={styles['footer-container']}>
                <img className={styles['footer-logo']} src={logo} alt='logo'/>
                <div className={styles['footer-flexbox']}>
                    <div className={styles['footer-links']}>
                        {
                            linkItems.map((item, index) => {
                                return (
                                    <a key={index}>{item}</a>
                                )
                            })
                        }
                    </div>
                    <div className={styles['footer-icons']}>
                        {
                            iconItems.map((item, index) => {
                                return (
                                    <a key={index}><img src={item} alt='social-media'/></a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles['footer-bar']}></div>
                <p>&#64; 2023 Ейвон Косметікс Юкрейн</p>
            </div>
        </div>
    )
}

export default Footer