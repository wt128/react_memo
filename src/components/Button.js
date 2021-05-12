import PropTypes from 'prop-types'

const Button = ({color, text, onClick }) => {
    /*const onClick = (e) =>{
        alert(e)
    } */
    return (
        <div> 
            <button onClick={onClick} style={{backgroundColor: color}}
            className='btn'> Add</button>            
        </div>
    )
} 

Button.defalutProps = {
    color: 'steelbule'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
