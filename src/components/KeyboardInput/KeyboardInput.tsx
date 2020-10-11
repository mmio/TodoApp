import React from 'react'

type Props = {
    onInputChange: (newInput: string) => void
    placeholder?: string
    initValue?: string
}

const KeyboardInput: React.FC<Props> = ({ onInputChange, placeholder = '', initValue=''}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)

    return (
        <input
            type={'textField'}
            value={initValue}
            placeholder={placeholder}
            onChange={handleInputChange}
        />
    )
}

export default KeyboardInput