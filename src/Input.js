const Input = (props) => {
    const {placeholder,type,required,...rest} = props;

    return (
        <>
            <label className="label">
            {placeholder}
            {required && <span className="input-required">*</span>}
            <div>
                <input 
                    type={type? type : "text"} 
                    placeholder={placeholder} 
                    required={required} 
                    data-testid="input"
                    {...rest}/>
            </div>
            </label>
        </>
    )
}

export default Input;