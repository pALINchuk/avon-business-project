import React, {useContext} from "react";
import styles from './Home.module.css'
import arrow from '../../Assets/arrow-down-icon.svg'
import {motion} from "framer-motion";
import Registration from "../Registration/Registration";
import {ScrollContext} from "../../ScrollContext";

const Home = () => {
    // const homePageButtonHandler = () => {
    //     fetch('http://localhost:8888/project-avon-api/?name=Alina&team=25', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }
    const targetRef = useContext(ScrollContext)

    const handleClick = () => {
        // if (targetRef && targetRef.current) {
        //     window.scrollTo({
        //         top: targetRef.current.offsetTop,
        //         behavior: 'smooth',
        //     });
        // }
    }

    return (
        <div className={styles['home-wrapper']}>
            {/*<div className={styles['home-container']}>*/}
            {/*    <h1>Власний бізнес з Ейвон</h1>*/}
            {/*    <p>Почни заробляти сьогодні з найуспішнішою косметичною компанією!</p>*/}
            {/*    <button>Приєднатися безкоштовно</button>*/}

            {/*</div>*/}
            <motion.div
                className={styles['home-container']}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
            >
                <motion.h1
                    initial={{y: 50}}
                    animate={{y: 0}}
                    transition={{
                        delay: 0.1,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                }}
                >Власний бізнес з Ейвон</motion.h1>
                <motion.p
                    initial={{y: 50}}
                    animate={{y: 0}}
                    transition={{
                        delay: 0.2,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >Почни заробляти сьогодні з найуспішнішою косметичною компанією!</motion.p>
                <div className={styles['home-button-container']}>
                    <motion.button
                        // initial={{y: 50}}
                        animate={{y: 0}}
                        transition={{
                            delay: 0.3,
                            duration: 0.3,
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        onClick={handleClick}
                        // onClick={homePageButtonHandler}
                    >Приєднатися безкоштовно</motion.button>
                    <motion.img
                        src={arrow} alt='arrow-img'
                        // animate={{ y: [0, -25, 0], transition: { duration: 2.5, repeat: Infinity } }}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Home