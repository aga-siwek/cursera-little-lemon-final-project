import React, {useState} from "react";
import styles from "./HamburgerMenu.module.css";
import {Twirl as Hamburger} from 'hamburger-react'

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    return (<div className={styles.menu}>
            {isOpen &&
                <div className={styles.menu_open}>
                    <ul className={styles.menu_list}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                    </ul>
                </div>}
            <Hamburger toggled={isOpen} toggle={setIsOpen}/>
        </div>
    )
}