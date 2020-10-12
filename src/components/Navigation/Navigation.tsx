import React from 'react'
import { Link } from "react-router-dom"

import globalStyles from '../../styles/styles.module.css'
import styles from './styles.module.css'

const Navigation = () => (
    <nav className={styles.padBottom}>
        <ul className={`${globalStyles.card} ${styles.noDecoration} ${globalStyles.horizontalContainer} ${globalStyles.noMargin}`}>
            <li className={styles.rightMargin}>
                <Link className={styles.noDecoration} to="/">Todo list</Link>
            </li>
            <li>
                <Link className={styles.noDecoration} to="/tasks">Task history</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation