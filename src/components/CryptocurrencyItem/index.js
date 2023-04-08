// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {crypto} = props

  const {currencyName, usdValue, euroValue, currencyLogo} = crypto

  return (
    <li className="listContainer">
      <div className="logoContainer">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="valueContainer">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
