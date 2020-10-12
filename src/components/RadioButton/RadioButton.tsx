import React from 'react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
    id?: string
    checkedByDefault?: boolean
    checked?: boolean
    label: string
    group?: string
    onToggle: () => void
}

const RadioButton: React.FC<Props> = ({ checked, checkedByDefault, label, id = uuidv4(), group = uuidv4(), onToggle}) => (
    <>
        <input
            checked={checked}
            defaultChecked={checkedByDefault}
            id={id}
            name={group}
            onChange={onToggle}
            type={'radio'}
        />
        <label htmlFor={id}> {label} </label>
    </>
)

export default RadioButton