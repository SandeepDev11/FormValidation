import React from 'react'

const InputType = ({ inputData, value, onChange, onBlur }) => {
    const { type, name, id, autoComplete, label, iconsName } = inputData;
    return (
        <>
            <div className="inputbox">
                <ion-icon name={iconsName}></ion-icon>
                <input
                    type={type}
                    name={name}
                    id={id}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <label htmlFor={label}>{label}</label>
            </div>
        </>
    )
}

export default InputType
