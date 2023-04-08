// Write your JS code here

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {currenciesList} = props
  console.log(currenciesList)

  return (
    <div className="trackerContainer">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptoImage"
      />

      <ul className="cryptoListContainer">
        <li className="topContainer">
          <div className="logo">
            <p className="coinType">Coin Type</p>
          </div>
          <li className="name">
            <p className="valueName">USD</p>
            <p className="valueName">EURO</p>
          </li>
        </li>
        {currenciesList.map(currency => (
          <CryptocurrencyItem crypto={currency} key={currency.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
