import React from "react";
import styles from './Bestsellers.module.css'
import img1 from '../../Assets/bestsellers/img1.png'
import img2 from '../../Assets/bestsellers/img2.png'
import img3 from '../../Assets/bestsellers/img3.png'
import img4 from '../../Assets/bestsellers/img4.png'
import img5 from '../../Assets/bestsellers/img5.png'
import img6 from '../../Assets/bestsellers/img6.png'
import img7 from '../../Assets/bestsellers/img7.png'
import img8 from '../../Assets/bestsellers/img8.png'
import img9 from '../../Assets/bestsellers/img9.png'
import img10 from '../../Assets/bestsellers/img10.png'
import twoHalfStars from '../../Assets/bestsellers/two_half_stars.svg'
import fourStars from '../../Assets/bestsellers/four_stars.svg'
import fourHalfStars from '../../Assets/bestsellers/four_half_stars.svg'
import fiveStars from '../../Assets/bestsellers/five-stars.svg'

const Bestsellers = () => {
    const items = [
        {
            imgProduct: img1,
            imgStars: fourStars,
            label: 'Туалетна вода Full Speed для Нього, 75 мл'
        },
        {
            imgProduct: img2,
            imgStars: fiveStars,
            label: 'Оновлювальна сироватка для обличчя «Енергія Протінола», 30 мл\n'
        },
        {
            imgProduct: img3,
            imgStars: fourHalfStars,
            label: 'Парфумна вода Today для Неї, 50 мл'
        },
        {
            imgProduct: img4,
            imgStars: fourStars,
            label: 'Багатофункціональна туш для вій 5-в-1'
        },
        {
            imgProduct: img5,
            imgStars: fiveStars,
            label: 'Духи Far Away Beyond для Неї, 50 мл'
        },
        {
            imgProduct: img6,
            imgStars: fourHalfStars,
            label: 'Парфумна вода Incandessence для неї, 50 мл'
        },
        {
            imgProduct: img7,
            imgStars: fiveStars,
            label: 'Парфумований спрей для тіла «Нефритова квітка та шовк» (100 мл)\n'
        }
        ,{
            imgProduct: img8,
            imgStars: twoHalfStars,
            label: 'Система 2-в-1 для шкіри навколо очей: крем і гель «Сяйво»\n'
        },
        {
            imgProduct: img9,
            imgStars: fiveStars,
            label: 'Туш для вій «СуперШок». Невагомий об`єм»'
        },
        {
            imgProduct: img10,
            imgStars: fourStars,
            label: 'Кремові рум\'яна'
        }
    ]
    return (
        <div className={styles['bestsellers-wrapper']}>
            <div className={styles['bestsellers-container']}>
                <h1>Наші бестселери</h1>
                <p>З цими товарами ваша команда досягне неймовірних продаж!</p>
                <button>Почати будувати структуру!</button>

                <div className={styles.bestsellers__gridbox}>
                    {
                        items.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.bestsellers__griditem}
                                >
                                    <img className={styles.bestsellers__product_img} src={item.imgProduct} alt='product]'/>
                                    <p>{item.label}</p>
                                    <img className={styles.bestsellers__stars_img} src={item.imgStars} alt='stars'/>
                                </div>
                            )
                        })
                    }
                </div>

                {/*<div className={styles.bestsellers__griditem}>*/}
                {/*    <img className={styles.bestsellers__product_img} src={img1} alt='perfume'/>*/}
                {/*    <p>Туалетна вода Full Speed для Нього, 75 мл</p>*/}
                {/*    <img className={styles.bestsellers__stars_img} src={fiveStars} alt='stars'/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Bestsellers