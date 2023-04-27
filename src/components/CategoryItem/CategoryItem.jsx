import React from 'react';
import styles from './CategoryItem.module.css'

const CategoryItem = ({ category }) => {
    return (
        <li className={styles.item} style={{ background: `${category.back}` }}>
            <p className={styles.number}>{category.id}</p>
            <img src={category.img} alt={category.categoryName} className={styles.img} />
            <div className={styles.tovari}>
                <p className={styles.tovar}>{`${category.tovari} товров`}</p>
                <p className={styles.name}>{category.categoryName}</p>
            </div>
        </li>
    );
};

export default CategoryItem;