// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoCurrencies: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()

    const updateData = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      currencyLogo: eachCurrency.currency_logo,
    }))
    console.log(updateData)

    this.setState({cryptoCurrencies: [...updateData], isLoading: false})
  }

  render() {
    const {cryptoCurrencies, isLoading} = this.state
    console.log(cryptoCurrencies)
    return (
      <div className="appContainer">
        {isLoading ? (
          <div data-testid="loader" className="loaderContainer">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList currenciesList={cryptoCurrencies} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
