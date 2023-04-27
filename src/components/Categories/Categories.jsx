import React from 'react';
import styles from './Categories.module.css';
import CategoryItem from '../CategoryItem/CategoryItem';

const category = [
    {
        id: '01',
        tovari: 105,
        categoryName: 'Ноутбуки',
        img: 'https://cdn.discordapp.com/attachments/939956535432478792/1101179874053468170/img1.png',
        back: '#F2F2F2'
    },
    {
        id: '02',
        tovari: 65,
        categoryName: 'Персональные компьютеры',
        img: 'https://cdn.discordapp.com/attachments/939956535432478792/1101179883666800760/img2.png',
        back: '#F9F9F9'
    },
    {
        id: '03',
        tovari: 13,
        categoryName: 'Серверы',
        img: 'https://cdn.discordapp.com/attachments/939956535432478792/1101179892936224818/img3.png',
        back: '#F2F2F2'
    },
    {
        id: '04',
        tovari: 2345,
        categoryName: 'Deil EMC',
        img: 'https://cdn.discordapp.com/attachments/939956535432478792/1101179902566334534/img4.png',
        back: '#F9F9F9'
    },
    {
        id: '05',
        tovari: 195,
        categoryName: 'Запасные части к Dell EMC',
        img: 'https://cdn.discordapp.com/attachments/939956535432478792/1101179912141930588/img5.png',
        back: '#F2F2F2'
    },
]

const Categories = () => {
    return (
        <section className={styles.section}>
            <ul className={styles.list}>
                <li className={styles.catalog}>
                    <p className={styles.title}>Каталог<br /> товаров от Dell</p>
                    <p className={styles.subtitle}>Наша компания является зарегистрированным и официальным партнером Dell в России.</p>
                    <div className={styles.btn_wrapper}>
                        <button type='button' className={styles.btn}>&gt;</button>
                        <p className={styles.podrobnee}>В каталог</p>
                    </div>
                </li>
                {category.map((cat, index) => {
                    return <CategoryItem key={index} category={cat} />
                })}
            </ul>
        </section>
    );
};

export default Categories;