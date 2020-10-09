import React, { useState } from 'react'
import KeyboardInput from '../KeyboardInput/KeyboardInput'

type Props = {
    addAction: (text: string) => void
}

const AddItemForm: React.FC<Props> = ({ addAction }) => {
    const [newItem, setNewItem] = useState<string>('')

    const addNewItem = () => {
        setNewItem('')
        addAction(newItem)
    }

    return (
        <>
            <KeyboardInput onInputChange={setNewItem} placeholder={'New item...'} initValue={newItem} />
            <button onClick={addNewItem}>+</button>
        </>
    )
}

export default AddItemForm
