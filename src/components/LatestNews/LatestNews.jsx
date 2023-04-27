import React from 'react';
import styles from './LatestNews.module.css';
import img1 from '../../images/news/img1.png'
import img2 from '../../images/news/img2.png'
import img3 from '../../images/news/img3.png'
import img4 from '../../images/news/img4.png'
import img5 from '../../images/news/img5.png'
import img6 from '../../images/news/img6.png'

const LatestNews = () => {
    return (
        <section className={styles.section}>
            <div className={styles.up}>
                <div className={styles.title_wrapper}>
                    <p className={styles.title}>Последние новости</p>
                    <div className={styles.btn_wrapper}>
                        <p className={styles.podrobnee}>Все новости</p>
                        <button type='button' className={styles.btn}>&gt;</button>
                    </div>
                </div>
                <p className={styles.subtitle}>Вы можете посмотреть ещё больше интересных новостей и узнать о последних новинках, перейдя по кнопке</p>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img src={img1} className={styles.item_img} />
                    <div className={styles.container_item}>
                        <div className={styles.btn_title}>
                            <p className={styles.item_title}>GE использует<br /> технологии Dell </p>
                            <button className={styles.circle_button}>&gt;</button>
                        </div>
                        <p className={styles.item_subtitle}>Вы можете посмотреть ещё больше интересных </p>
                    </div>
                    <div className={styles.date}>
                        <p className={styles.date_number}>11</p>
                        <p className={styles.date_month}>июля</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img src={img2} className={styles.item_img} />
                    <div className={styles.container_item}>
                        <div className={styles.btn_title}>
                            <p className={styles.item_title}>GE использует<br /> технологии Dell </p>
                            <button className={styles.circle_button}>&gt;</button>
                        </div>
                        <p className={styles.item_subtitle}>Вы можете посмотреть ещё больше интересных </p>
                    </div>
                    <div className={styles.date}>
                        <p className={styles.date_number}>11</p>
                        <p className={styles.date_month}>июля</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img src={img3} className={styles.item_img} />
                    <div className={styles.container_item}>
                        <div className={styles.btn_title}>
                            <p className={styles.item_title}>GE использует<br /> технологии Dell </p>
                            <button className={styles.circle_button}>&gt;</button>
                        </div>
                        <p className={styles.item_subtitle}>Вы можете посмотреть ещё больше интересных </p>
                    </div>
                    <div className={styles.date}>
                        <p className={styles.date_number}>11</p>
                        <p className={styles.date_month}>июля</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img src={img4} className={styles.item_img} />
                    <div className={styles.container_item}>
                        <div className={styles.btn_title}>
                            <p className={styles.item_title}>GE использует<br /> технологии Dell </p>
                            <button className={styles.circle_button}>&gt;</button>
                        </div>
                        <p className={styles.item_subtitle}>Вы можете посмотреть ещё больше интересных </p>
                    </div>
                    <div className={styles.date}>
                        <p className={styles.date_number}>11</p>
                        <p className={styles.date_month}>июля</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img src={img5} className={styles.item_img} />
                    <div className={styles.container_item}>
                        <div className={styles.btn_title}>
                            <p className={styles.item_title}>GE использует<br /> технологии Dell </p>
                            <button className={styles.circle_button}>&gt;</button>
                        </div>
                        <p className={styles.item_subtitle}>Вы можете посмотреть ещё больше интересных </p>
                    </div>
                    <div className={styles.date}>
                        <p className={styles.date_number}>11</p>
                        <p className={styles.date_month}>июля</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img src={img6} className={styles.item_img} />
                    <div className={styles.container_item}>
                        <div className={styles.btn_title}>
                            <p className={styles.item_title}>GE использует<br /> технологии Dell </p>
                            <button className={styles.circle_button}>&gt;</button>
                        </div>
                        <p className={styles.item_subtitle}>Вы можете посмотреть ещё больше интересных </p>
                    </div>
                    <div className={styles.date}>
                        <p className={styles.date_number}>11</p>
                        <p className={styles.date_month}>июля</p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default LatestNews;