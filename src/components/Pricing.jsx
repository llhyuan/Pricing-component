import { useState } from 'react'
import '../scss/_Pricing.scss'
import Styledslider from './Slider.jsx'
import Switch from './Switch'
import checkIcon from '../assets/images/icon-check.svg'

const MIN = 5
const MAX = 30
const initialState = {
  price: 16,
  monthlyBilling: false,
}

function Pricing() {
  const [data, setData] = useState(initialState);
  console.log(data);
  return (
    <form className='pricing-component'>
      <h4>100k pageviews</h4>
      <input
        className='priceRange-hide'
        type='range'
        name='price'
        value={data.price}
      />
      <Styledslider min={MIN} max={MAX} data={data} setValue={setData} />
      <p>
        <span>${data.price}</span>/month
      </p>
      <div className='options'>
        <input
          className='billingOption-hide'
          type='checkbox'
          name='monthlyBilling'
          checked={data.monthlyBilling}
        />
        <p>
          <span className='label'>Monthly Billing</span>
          <Switch setValue={setData} data={data} />
        </p>
        <p>
          <span className='label'>Yearly Billing</span>{' '}
          <span className='billingRate'>-25%</span>
        </p>
      </div>
      <div className='serviceContent'>
        <div>
          <p>
            <img className='checkedIcon' src={checkIcon} alt='check icon' />
            <span className='content'>Unlimited websites</span>
          </p>
          <p>
            <img className='checkedIcon' src={checkIcon} alt='check icon' />

            <span className='content'>100% data ownership</span>
          </p>
          <p>
            <img className='checkedIcon' src={checkIcon} alt='check icon' />

            <span className='content'>Email reports</span>
          </p>
        </div>
        <button type='submit'>Start my trial</button>
      </div>
    </form>
  )
}

export default Pricing
