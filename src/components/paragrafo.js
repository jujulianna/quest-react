import './paragrafo.css'

const Paragrafo = (textoParagrafo) => {

    return(
        <p className='paragrafo' style= {{textTransform: 'upperCase',color: 'red'}}> {textoParagrafo.textoParagrafo}</p>
    )
}

export default Paragrafo