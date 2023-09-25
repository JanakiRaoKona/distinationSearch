// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchInputResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container1">
          <input
            onChange={this.onChangeSearchInput}
            className="search-container2"
            type="search"
            placeholder="Search"
          />
          <img
            className="search-image search-container2"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="wrapping">
          {searchInputResults.map(eachItem => (
            <DestinationItem
              destinationsList={eachItem}
              unique
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
