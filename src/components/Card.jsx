

const Card = ({ title, description }) => {
  return (
    <div className="card">
        <h3>Learn { title }</h3>
        <p>{ description } Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempore.</p>
    </div>
  )
}

export default Card