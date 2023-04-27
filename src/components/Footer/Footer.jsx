import React from 'react';
import styles from './Footer.module.css'
import bigLogo from '../../images/news/Dell_Logo.svg'
import facebook from '../../images/news/facebook.svg'
import whatsapp from '../../images/news/whatsapp.svg'
import dell from '../../images/news/DELL.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={dell} className={styles.dell} />
            <div className={styles.up}>
                <img src={bigLogo} alt='logo' style={styles.logo} />
                <div className={styles.up_wrapper}>
                    <div className={styles.list}>
                        <p className={styles.title}>Каталог</p>
                        <ul className={styles.ul}>
                            <li className={styles.item}><a className={styles.link}>Ноутбуки</a></li>
                            <li className={styles.item}><a className={styles.link}>Персональные компьютеры</a></li>
                            <li className={styles.item}><a className={styles.link}>Серверы</a></li>
                            <li className={styles.item}><a className={styles.link}>Deil EMC</a></li>
                            <li className={styles.item}><a className={styles.link}>Запасные части к Deil EMC</a></li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <p className={styles.title}>Личный кабинет</p>
                        <ul className={styles.ul}>
                            <li className={styles.item}><a className={styles.link}>Профиль</a></li>
                            <li className={styles.item}><a className={styles.link}>История заказов</a></li>
                            <li className={styles.item}><a className={styles.link}>SMS-уведомления</a></li>
                            <li className={styles.item}><a className={styles.link}>Избранное</a></li>
                            <li className={styles.item}><a className={styles.link}>Сравнение товаров</a></li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <p className={styles.title}>Помощь</p>
                        <ul className={styles.ul}>
                            <li className={styles.item}><a className={styles.link}>Доставка и оплата</a></li>
                            <li className={styles.item}><a className={styles.link}>Контакты</a></li>
                            <li className={styles.item}><a className={styles.link}>FAQ</a></li>
                            <li className={styles.item}><a className={styles.link}>Наш АСЦ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.border}></div>
            <div className={styles.bottom}>
                <div className={styles.bottom_item}>
                    <p className={styles.bottom_item_top}>Адрес</p>
                    <p className={styles.bottom_item_bottom}>Москва, ул. 3-я Хорошевская, дом 2, строение 1</p>
                </div>
                <div className={styles.bottom_item}>
                    <p className={styles.bottom_item_top}>Телефон</p>
                    <p className={styles.bottom_item_bottom}>+7 495 737-06-01, +7 495 737-06-01</p>
                </div>
                <div className={styles.bottom_item}>
                    <p className={styles.bottom_item_top}>E-mail</p>
                    <p className={styles.bottom_item_bottom}>dell_ru@gmail.com</p>
                </div>
                <div className={styles.bottom_item_last}>
                    <img src={facebook} alt='facebook' className={styles.img_link} />
                    <img src={whatsapp} alt='whatsapp' className={styles.img_link} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;