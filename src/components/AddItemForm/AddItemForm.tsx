import React, { useState } from 'react'

import KeyboardInput from '../KeyboardInput/KeyboardInput'

import styles from '../../styles/styles.module.css'

type Props = {
    addAction: (text: string) => void
}

const AddItemForm: React.FC<Props> = ({ addAction }) => {
    const [name, setName] = useState('')

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setName('')
        addAction(name)
    }

    return (
        <div className={`${styles.horizontalContainer} ${styles.card}`}>
            <KeyboardInput
                initValue={name}
                onInputChange={setName}
                placeholder={'New item...'}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddItemForm
