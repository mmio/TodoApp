import React from 'react'

type Props = {
    onInputChange: (newInput: string) => void
    placeholder?: string
    initValue?: string
}

const KeyboardInput: React.FC<Props> = ({ onInputChange, placeholder = '', initValue=''}) => (
    <input
        style={{width: '100%'}}
        type={'textField'}
        value={initValue}
        placeholder={placeholder}
        onChange={e => onInputChange(e.target.value)}
    />
)

export default KeyboardInput