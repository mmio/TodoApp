import React, { useState } from 'react'
import KeyboardInput from '../KeyboardInput/KeyboardInput'

type Props = {
    addAction: (text: string) => void
}

const AddItemForm: React.FC<Props> = ({ addAction }) => {
    const [name, setName] = useState('')

    const handleClick = () => {
        setName('')
        addAction(name)
    }

    return (
        <>
            <KeyboardInput
                initValue={name}
                onInputChange={setName}
                placeholder={'New item...'}
            />
            <button onClick={handleClick}>+</button>
        </>
    )
}

export default AddItemForm
