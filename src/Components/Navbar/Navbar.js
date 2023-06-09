import React, {useRef} from "react";
import logo from '../../Assets/logo-avon.svg'
import phone from '../../Assets/phone-icon.svg'
import styles from './Navbar.module.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom";


const Navbar = () => {
    // const [openedMenu, setOpenedMenu] = useState(false)

    const location = useLocation();

    const navRef = useRef()

    const showNavbar = () => {
        if(navRef.current.offsetWidth < 1024){
            navRef.current.classList.toggle(styles['responsive-nav'])
        }
    }

    return (
        <header>
            <nav className={styles['navbar-wrapper']}>
                <NavLink to='/' className={styles['nav-logo-container']}>
                    <img
                        className={styles['nav-logo']}
                        src={logo}
                        alt='logo'
                    />
                </NavLink>
                <div className={styles['navbar-container']} ref={navRef}>
                    <div className={styles['navbar-links-container']}>
                        <NavLink to='/about' onClick={showNavbar}>Про нас</NavLink>
                        <NavLink to='/startBusiness' onClick={showNavbar}>Почати бізнес</NavLink>
                        <NavLink to='/bestsellers' onClick={showNavbar}>Бестселери</NavLink>
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