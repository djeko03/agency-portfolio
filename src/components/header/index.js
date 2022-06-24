import React from 'react';
import css from './index.module.css'
import {Logo} from "../logo";

export const Header = () => {
    return (
        <div className={css.container}>
            <Logo/>
            <div className={css.navigation}>
                <p className={css.link}>About</p>
                <p className={css.link}>Services</p>
                <p className={css.link}>Pricing</p>
                <p className={css.link}>Blog</p>
            </div>
            <button className={css.button}>Contact</button>
        </div>
    );
};

