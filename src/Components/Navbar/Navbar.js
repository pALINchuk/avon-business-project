import React, {useRef} from "react";
import logo from '../../Assets/logo-avon.svg'
import phone from '../../Assets/phone-icon.svg'
import styles from './Navbar.module.css'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {
    // const [openedMenu, setOpenedMenu] = useState(false)

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle(styles['responsive-nav'])
    }

    return (
        <header>
            <nav className={styles['navbar-wrapper']}>
                <a href='#' className={styles['nav-logo-container']}>
                    <img
                        className={styles['nav-logo']}
                        src={logo}
                        alt='logo'
                    />
                </a>
                <div className={styles['navbar-container']} ref={navRef}>
                    <div className={styles['navbar-links-container']}>
                        <a href='src/Components#'>Про нас</a>
                        <a href='src/Components#'>Почати бізнес</a>
                        <a href='src/Components#'>Бестселери</a>
                        <div className={styles['navbar-links-phone']}>
                            <img src={phone} alt='phone'/>
                            (097)645-59-88
                        </div>

                        <button className={`${styles['nav-btn']} ${styles['nav-close-btn']}`} onClick={showNavbar}>
                            {/*<img src={close} alt='close-img'/>*/}
                            <FaTimes/>
                        </button>
                    </div>
                </div>
                <button className={`${styles['nav-btn']}`} onClick={showNavbar}>
                    {/*<img src={menu} alt='menu-img'/>*/}
                    <FaBars/>
                </button>
            </nav>
        </header>
    )
}

export default Navbar