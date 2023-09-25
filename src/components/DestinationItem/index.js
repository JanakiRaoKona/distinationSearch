// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList
  return (
    <li className="card-item">
      <img className="image" alt={name} src={imgUrl} />
      <p className="name-heading">{name}</p>
    </li>
  )
}
export default DestinationItem
