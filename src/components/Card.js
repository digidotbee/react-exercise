
const Card = (props) => {

    return (
        <div>
          <p>{props.user.phone==null ? 'N/A' : props.user.phone}</p>  
          <p>{props.user2.phone==null ? 'N/A' : props.user2.phone}</p>  
        </div>
    )
}

export default Card
