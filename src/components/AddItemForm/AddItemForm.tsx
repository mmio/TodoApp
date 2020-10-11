import React, { useState } from 'react'
import KeyboardInput from '../KeyboardInput/KeyboardInput'

type Props = {
    addAction: (text: string) => void
}

const AddItemForm = ({ addAction } : Props) => {
    const [newItem, setNewItem] = useState('')

    const handleClick = () => {
        setNewItem('')
        addAction(newItem)
    }

    return (
        <>
            <KeyboardInput
                onInputChange={setNewItem}
                placeholder={'New item...'}
                initValue={newItem}
            />
            <button onClick={handleClick}>+</button>
        </>
    )
}

export default AddItemForm
