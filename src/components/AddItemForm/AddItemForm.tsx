import React, { useState } from 'react'
import KeyboardInput from '../InputForm/InputForm'

type Props = {
    addAction: (text: string) => void
}

const AddItemForm: React.FC<Props> = ({ addAction }) => {
    const [newItem, setNewItem] = useState<string>('')

    return (
        <>
            <KeyboardInput onInputChange={setNewItem} placeholder={'New item...'} initValue={newItem} />
            <button onClick={() => {setNewItem(''); addAction(newItem)}}>+</button>
        </>
    )
}

export default AddItemForm
