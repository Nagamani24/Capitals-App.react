import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}

  selectOption = event => {
    this.setState({capital: event.target.value})
  }

  getCountry = () => {
    const {capital} = this.state
    const displayCountry = countryAndCapitalsList.filter(
      each => each.id === capital,
    )

    return displayCountry[0]
  }

  render() {
    const {capital} = this.state

    const countryName = this.getCountry(capital)

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Countries and Capitals</h1>
          <div>
            <select
              name="countries"
              id="country"
              className="options"
              onChange={this.selectOption}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="country" className="label">
              is capital of which country?
            </label>
            <p>{countryName.country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
