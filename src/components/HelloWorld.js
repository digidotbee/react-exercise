// import PropTypes from 'prop-types'
import Greet from './Greet'

const HelloWorld = ({title}) => {

    return (
        <header className='hello'>

            <h1> {title} </h1> 
        </header>
    )
}

HelloWorld.defaultProps = {
    title: "Hello,World",
}

// HelloWorld.propTypes = {
//     title: PropTypes.string 
// }

export default HelloWorld


