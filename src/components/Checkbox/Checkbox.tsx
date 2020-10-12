import React from 'react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
    checked: boolean
    label: string
    name?: string
    onToggle: () => void
}

const Checkbox: React.FC<Props> = ({ checked, label, name = uuidv4(), onToggle}) => (
    <div onClick={onToggle}>
        <input
            checked={checked}
            name={name}
            onChange={onToggle}
            type={'checkbox'}
        />
        <label htmlFor={name}> {label} </label>
    </div>
)

export default Checkbox