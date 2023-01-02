// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
    const {destinationsList} = this.props;
    state = {searchInput: '', destList: destinationsList}

  render() {
    const {searchInput, destList} = this.state
    const filteredList = destList.filter(each =>
      each.name.includes(searchInput)
    )
    return (
      <div className="bg-container">
        <h1 className="head">Destination Search</h1>
        <div className="search-box">
          <input type="text" value={searchInput} />
        </div>
      </div>
    )
  }
}

export default DestinationSearch
