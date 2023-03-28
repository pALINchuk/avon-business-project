import React from "react";
import styles from "../FirstBlock/FirstBlock.module.css";
import img from "../../Assets/first-block-img.png"

const FirstBlock = () => {
    return (
        <div className={styles['firstblock-wrapper']}>
            <div className={styles['firstblock-container']}>
                <h1>Заробляй тим, що ділишся красою</h1>
                <div className={styles['firstblock-content']}>
                    <img src={img} alt='img-people'/>
                    <p>Давно мріяли створити власний бізнес в сфері краси? З нашою підтримкою можливе все! Ставайте інфлюенсером краси, експертом з догляду за шкірою, або підприємцем будь-якого вашого захоплення, вдома чи в дорозі, наживо чи онлайн.</p>
                </div>
                {/*<div className={styles['firstblock-free-bar']}>*/}
                {/*    <h2>І звичайно, це все БЕЗКОШТОВНО!</h2>*/}
                {/*    <p>Саме так, жодних капітальних вкладень, прихованих комісій тощо.</p>*/}
                {/*    <button>Я з вами!</button>*/}
                {/*</div>*/}
            </div>
            <div className={styles['firstblock-free-bar']}>
                <h2>І звичайно, це все БЕЗКОШТОВНО!</h2>
                <p>Саме так, жодних капітальних вкладень, прихованих комісій тощо.</p>
                <button>Я з вами!</button>
            </div>
        </div>
    )
}

export default FirstBlock