import './button.css'

const Button = ({label}) => {
    return(
    <button className='btn' onClick={() => alert('está escrito no label: ' + (label))}>{label}</button>
    )
}

export default Button

