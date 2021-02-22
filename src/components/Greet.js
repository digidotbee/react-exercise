// import PropTypes from 'react'

function Greet(props) {

    console.log(props)


    return (
        <div>
            <h3>Greetings, {props.user.name.first} {props.user.name.last}</h3>
            <h3>Greetings, {props.user2.name.first} {props.user2.name.last}</h3>
        </div>
    )
}


export default Greet
