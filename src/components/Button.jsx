
const Button = ({text, buttonClassName, buttonStyle}) => {
    return(
        <button className={buttonClassName} style={buttonStyle}>
            {text}
        </button>
    )
}

export default Button