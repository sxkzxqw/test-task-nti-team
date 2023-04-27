import React from 'react';
import styles from './Slider.module.css'
import dell from '../../images/main/Dell.svg'
import noute from '../../images/main/noutes.png'
import noute2 from '../../images/main/noutes2.png'
import strelka from '../../images/main/strelka.svg'

const Slider = () => {
    return (
        <section className={styles.section}>
            {/* <p className={styles.dell}>dell</p
            вариант с текстом
            > */}
            <img src={dell} className={styles.dell_img} />
            <div className={styles.container}>
                <div className={styles.scroll}>
                    <div className={styles.oval}>
                        <div className={styles.line}></div>
                    </div>
                    <p className={styles.scroll_text}>Scroll to catalog</p>
                </div>
                <div className={styles.title_wrapper}>
                    <p className={styles.deliver}>Новое поступление</p>
                    <p className={styles.items}>Лучшие товары<br />от компании Dell</p>
                    <div className={styles.btn_wrapper}>
                        <button type='button' className={styles.btn}>&gt;</button>
                        <p className={styles.podrobnee}>Подробнее</p>
                    </div>
                </div>
            </div>
            <img src={noute} alt='noute' className={styles.noute} />
            <div className={styles.second}>
                <img src={noute2} alt='noute2' className={styles.noute2} />
                <p className={styles.dell_text}>Выгодное предложение от Dell</p>
                <img className={styles.strelka} alt='strelka' src={strelka} />
            </div>
            <div className={styles.slider_circles}>
                <div className={styles.active_circle}></div>
                <div className={styles.slider_circle}></div>
                <div className={styles.slider_circle}></div>
                <div className={styles.slider_circle}></div>
                <div className={styles.slider_circle}></div>
            </div>
        </section>
    );
};

export default Slider;