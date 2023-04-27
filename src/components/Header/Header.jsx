import React from 'react';
import styles from './Header.module.css'
import logo from '../../images/logo.svg'
import zalupa from '../../images/lupa-zalupa.svg'
import profileImg from '../../images/profileIcon.svg'
import graphic from '../../images/graphicHeader.svg'
import like from '../../images/like.svg'
import korzina from '../../images/korzina.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.nav_container}>
                <img src={logo} alt='logo' />
                <div className={styles.nav_links_container}>
                    <nav className={styles.nav}>
                        <a className={styles.link} href='#'>главная</a>
                        <a className={styles.link} href='#'>каталог</a>
                        <a className={styles.link} href='#'>новости</a>
                        <a className={styles.link} href='#'>наш асц</a>
                        <a className={styles.link} href='#'>контакты</a>
                    </nav>
                    <img src={zalupa} className={styles.lupa} alt='lupa' />
                </div>
            </div>
            <ul className={styles.profile}>
                <li className={styles.profile_item}>
                    <img src={profileImg} alt='porfile' />
                </li>
                <li className={styles.profile_item}>
                    <img src={graphic} alt='graphic' />
                </li>
                <li className={styles.profile_item}>
                    <img src={like} className={styles.like} alt='liked' />
                </li>
                <li className={styles.profile_item}>
                    <div className={styles.circle}>
                        <p className={styles.nimber}>3</p>
                    </div>
                    <img src={korzina} alt='korzina' />
                </li>
            </ul>
        </header>
    );
};

export default Header;