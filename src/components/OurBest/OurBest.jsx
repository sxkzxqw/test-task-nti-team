import React from 'react';
import styles from './OurBest.module.css'
import noute from '../../images/grid/img6.png'
import best from '../../images/grid/img7.png'
import people from '../../images/grid/people.svg'
import cube from '../../images/grid/3dcube.svg'
import card from '../../images/grid/card-pos.svg'
import done from '../../images/grid/done.svg'
import line from '../../images/grid/line.svg'

const OurBest = () => {
    return (
        <section className={styles.section}>
            <img className={styles.best} src={best} />
            <div className={styles.up}>
                <img className={styles.noute} src={noute} />
                <div className={styles.text}>
                    <p className={styles.title}>Наши преимущества</p>
                    <p className={styles.description}>Оптимизация мощностей (расходов, социальных выплат и т.п.) позволили компании на 4,7% понизить цены по сравнению с конкурентами</p>
                    <div className={styles.btn_wrapper}>
                        <button type='button' className={styles.btn}>&gt;</button>
                        <p className={styles.podrobnee}>Оставить заявку</p>
                    </div>
                </div>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img src={line} className={styles.line} />
                    <div className={styles.img_container}>
                        <img className={styles.grid_image} src={card} />
                    </div>
                    <p className={styles.item_title}>Самые выгодные и низкие цены</p>
                    <p className={styles.item_subtitle}>В наличии широкий ассортимент, а также доступные цены
                        на ноутбуки Dell </p>
                </li>
                <li className={styles.item}>
                    <img src={line} className={styles.line} />
                    <div className={styles.img_container}>
                        <img className={styles.grid_image} src={done} />
                    </div>
                    <p className={styles.item_title}>Авторизованный сервисный центр DELL</p>
                    <p className={styles.item_subtitle}>Сертифицированный сервисный центр по ремонту техники Dell в России и странах СНГ</p>
                </li>
                <li className={styles.item}>
                    <img src={line} className={styles.line} />
                    <div className={styles.img_container}>
                        <img className={styles.grid_image} src={people} />
                    </div>
                    <p className={styles.item_title}>Высокий уровень технической экспертизы</p>
                    <p className={styles.item_subtitle}>Мы прошли аттестацию в виде тестирования, где показали высокий уровень знаний</p>
                </li>
                <li className={styles.item}>
                    <img src={line} className={styles.line} />
                    <div className={styles.img_container}>
                        <img className={styles.grid_image} src={cube} />
                    </div>
                    <p className={styles.item_title}>Официальный партнер DELL</p>
                    <p className={styles.item_subtitle}>Официальный поставщик продукции DELL в России
                        и странах СНГ</p>
                </li>
            </ul>
        </section>
    );
};

export default OurBest;