import { useEffect } from 'react';

const Input = (props) => {
    let { type, placeholder, onChange } = props

    return (
        <div>
            <input placeholder={placeholder} type={type} onChange={onChange} className="input"/>
        </div>
    )
}

export default Input