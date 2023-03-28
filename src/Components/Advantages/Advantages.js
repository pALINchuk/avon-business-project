import React from "react";
import styles from './Advantages.module.css'
import peopleIcon from '../../Assets/people-icon.svg'
import bagIcon from '../../Assets/bag.svg'
import giftIcon from '../../Assets/gift.svg'
import hoursIcon from '../../Assets/24-hours.svg'
import developmentIcon from '../../Assets/development.svg'

const Advantages = () => {
    const items = [
        {icon: peopleIcon, text: 'Віддані роботі та доброзичливі працівники', label: 'people'},
        {icon: bagIcon, text: 'Найдосвідченіші фахівці з досвідом роботи понад 15 років', label: 'bag'},
        {icon: giftIcon, text: 'Подарунки та винагороди за досягнення', label: 'gift'},
        {icon: hoursIcon, text: 'Постійно на зв’язку', label: '24hours'},
        {icon: developmentIcon, text: 'Легкий розвиток завдяки якісним порадам', label: 'development image'}
    ]

    return (
        <div className={styles['advantages-wrapper']}>
            <div className={styles['advantages-container']}>
                <h1>Переваги саме нашої команди</h1>
                <div className={styles['advantages-grid']}>
                    {
                        items.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={styles[`advantages-grid-item${index+1}`]}
                                >
                                    <img src={item.icon} alt={item.label}/>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }
                    {/*<div className={styles['advantages-grid-item1']}>*/}
                    {/*    <img src={peopleIcon} alt='people'/>*/}
                    {/*    <p>Віддані роботі та доброзичливі працівники</p>*/}
                    {/*</div>*/}
                    {/*<div className={styles['advantages-grid-item2']}>*/}
                    {/*    <img src={peopleIcon} alt='people'/>*/}
                    {/*    <p>Віддані роботі та доброзичливі працівники</p>*/}
                    {/*</div>*/}
                    {/*<div className={styles['advantages-grid-item3']}>*/}
                    {/*    <img src={peopleIcon} alt='people'/>*/}
                    {/*    <p>Віддані роботі та доброзичливі працівники</p>*/}
                    {/*</div>*/}
                    {/*<div className={styles['advantages-grid-item4']}>*/}
                    {/*    <img src={peopleIcon} alt='people'/>*/}
                    {/*    <p>Віддані роботі та доброзичливі працівники</p>*/}
                    {/*</div>*/}
                    {/*<div className={styles['advantages-grid-item5']}>*/}
                    {/*    <img src={peopleIcon} alt='people'/>*/}
                    {/*    <p>Віддані роботі та доброзичливі працівники</p>*/}
                    {/*</div>*/}
                </div>
            </div>

        </div>
    )
}

export default Advantages