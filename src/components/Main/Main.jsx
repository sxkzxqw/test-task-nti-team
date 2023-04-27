import React from 'react';
import styles from './Main.module.css'
import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';
import OurBest from '../OurBest/OurBest';
import LatestNews from '../LatestNews/LatestNews';
import Form from '../Form/Form';

const Main = () => {
    return (
        <main>
            <Slider />
            <Categories />
            <OurBest />
            <LatestNews />
            <Form />
        </main>
    );
};

export default Main;