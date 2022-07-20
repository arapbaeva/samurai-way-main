import React from "react";
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        // <nav className="nav">
         <nav className={styles.nav}>
            <div>
                <a className={styles.item}>Profile</a>
            </div>
            <div>
                <a className={styles.item}>Messages</a>
            </div>
            <div>
                <a className={styles.item}>News</a>
            </div>
            <div>
                <a className={styles.item}>Music</a>
            </div>
            <div>
                <a className={styles.item}>Settings</a>
            </div>
        </nav>
)
}