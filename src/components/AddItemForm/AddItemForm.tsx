import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'

type Props = {
    addAction: (text: string) => void
}

const AddItemForm: React.FC<Props> = ({ addAction }) => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <InputForm onInputChange={setSearchTerm}/>
            <button onClick={() => {addAction(searchTerm);console.log(searchTerm)}}>Add</button>
        </>
    )
}
export default AddItemForm
