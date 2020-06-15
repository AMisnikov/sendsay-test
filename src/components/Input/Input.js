import React from 'react';

const Input = ({ id, labelText, labelHint, className, errors, ...otherProps }) => (
    <div className={className ? `input ${className}` : "input"}>
        {labelText && (
            <label htmlFor={id} className="input__label">
                <span className="input__label-text">{labelText}</span>
                {labelHint && <span className="input__label-hint">{labelHint}</span>}
            </label>
        )}
        <input id={id} className="input__field" {...otherProps}/>
        {errors && errors.length > 0 && (
            errors.map((error, index) => <p key={index} className="input__error">{error}</p> )
        )}
    </div>
);

export default Input;