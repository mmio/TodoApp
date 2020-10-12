import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from '../../styles/styles.module.css'

type Props = {
    checked: boolean
    label: string
    name?: string
    onToggle: () => void
}

const Checkbox: React.FC<Props> = ({ checked, label, name = uuidv4(), onToggle}) => (
    <div className={styles.fullWidth} onClick={onToggle}>
        <input
            checked={checked}
            name={name}
            type={'checkbox'}
            readOnly
        />
        <label htmlFor={name}> {label} </label>
    </div>
)

export default Checkbox