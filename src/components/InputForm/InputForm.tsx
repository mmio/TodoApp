import React from 'react'

type Props = {
    onInputChange: (newInput: string) => void
}

const InputForm: React.FC<Props> = ({ onInputChange }) => (
    <input type={'textField'} onChange={ (e) => onInputChange(e.target.value) } />
)

export default InputForm