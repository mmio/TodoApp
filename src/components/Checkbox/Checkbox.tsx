import React from 'react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
    checked: boolean
    label: string
    onToggle: () => void
}

const Checkbox: React.FC<Props> = ({ checked, label, onToggle}) => {
    const randomName = uuidv4()
    
    return (
        <>
            <input type={'checkbox'} name={randomName} checked={checked} onChange={onToggle}/>
            <label htmlFor={randomName}> {label} </label>
            <br />
        </>
    )
}

export default Checkbox