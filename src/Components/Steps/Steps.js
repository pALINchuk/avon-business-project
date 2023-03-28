import React from "react";
import styles from "../Steps/Steps.module.css";
import conditionsIcon from '../../Assets/conditions/conditions-whole.svg'
import actionsIcon from '../../Assets/actions/actions-whole.svg'
import prizeIcon from '../../Assets/prize/prize-whole.svg'
import bars from '../../Assets/line.svg'

const Steps = () => {
    const items = [
        {
            icon: conditionsIcon,
            title: 'Умови',
            listOfSteps: ['Створюй свою команду. Більша команда – більший розмір продажів – вище твоя винагорода',
                'Будуй бізнес онлайн або офлайн',
                'Ви самі визначаєте який дохід Ви хочете отримати і як швидко'],
            alt: 'conditions'
        },
        {
            icon: bars
        },
        {
            icon: actionsIcon,
            title: 'Дії',
            listOfSteps: ['Набирай та розвивай свою команду',
                'Керуй показниками',
                'Працюй у тандемі зі своїм Наставником'],
            alt: 'actions'
        },
        {
            icon: bars
        },
        {
            icon: prizeIcon,
            title: 'Винагорода',
            listOfSteps: ['Від 7 до 9 % доходу від продажів твоєї особистої групи',
                'Дохід з продажів усієї структури',
                'Додаткові бонуси вже з першого місяця співпраці'],
            alt: 'prize'
        },
    ]

    return (
        <div className={styles['steps-wrapper']}>
            <div className={styles['steps-container']}>
                <h1>Як це працює?</h1>
                <div className={styles['steps-flexbox']}>
                    {
                        items.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${styles['steps-flex-item']} ${!item.title ? styles['bars'] : ''}`}
                                >
                                    <img src={item.icon} alt={item.alt}/>
                                    {item.title ? <h2>{item.title}</h2> : null}
                                    {item.listOfSteps ? (
                                            <ul>
                                                {item.listOfSteps.map((item, index) => (
                                                    <li key={index}><div className={styles['dot-element']}></div>{item}</li>
                                                    )
                                                )}
                                            </ul>
                                        )
                                        : null}
                                </div>
                            )
                        })
                    }


                    {/*<div className={styles['steps-flex-item']}>*/}
                    {/*    <img src={conditionsIcon}/>*/}
                    {/*    <h2>Умови</h2>*/}
                    {/*    <ul>*/}
                    {/*        <li>Створюй свою команду. Більша команда – більший розмір продажів – вище твоя винагорода*/}
                    {/*        </li>*/}
                    {/*        <li>Будуй бізнес онлайн або офлайн</li>*/}
                    {/*        <li>Ви самі визначаєте який дохід Ви хочете отримати і як швидко</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/*<div className={styles['steps-flex-item']}>*/}
                    {/*    <img src={conditionsIcon}/>*/}
                    {/*    <h2>Умови</h2>*/}
                    {/*    <ul>*/}
                    {/*        <li>Створюй свою команду. Більша команда – більший розмір продажів – вище твоя винагорода*/}
                    {/*        </li>*/}
                    {/*        <li>Будуй бізнес онлайн або офлайн</li>*/}
                    {/*        <li>Ви самі визначаєте який дохід Ви хочете отримати і як швидко</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/*<div className={styles['steps-flex-item']}>*/}
                    {/*    <img src={conditionsIcon}/>*/}
                    {/*    <h2>Умови</h2>*/}
                    {/*    <ul>*/}
                    {/*        <li>Створюй свою команду. Більша команда – більший розмір продажів – вище твоя винагорода*/}
                    {/*        </li>*/}
                    {/*        <li>Будуй бізнес онлайн або офлайн</li>*/}
                    {/*        <li>Ви самі визначаєте який дохід Ви хочете отримати і як швидко</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
                <div className={styles['steps-textblock']}>
                    <h2>
                        Просто визначай свої Правила Бізнесу і отримуй дохід, який Ти бажаєш
                    </h2>
                    <p>Компанія пропонує безмежні можливості для твого розвитку</p>
                    <h3>Стань <span>партнером</span> вже без вагань!</h3>
                </div>
            </div>
        </div>
    )
}

export default Steps