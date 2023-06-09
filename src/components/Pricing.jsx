import { useState } from 'react'
import checkIcon from '../assets/images/icon-check.svg'
import UnstyledSlider from './Slider'
import UnstyledSwitches from './Switch'
import '../scss/_Pricing.scss'

const MIN = 5
const MAX = 30
const initialState = {
  price: 16,
  monthlyBilling: false,
}

function Pricing() {
  const [data, setData] = useState(initialState);

  function changeHandler(event){
    console.log(event.target.value);
    setData({
      ...data,
      price: event.target.value
    })
  }

  function toggleHandler(event){
    console.log(event.target.checked);
    setData({
      ...data,
      monthlyBilling:event.target.checked 
    })
  }

    return (
    <form className='pricing-component'>
      <h1>{Math.round((100/16)*data.price)}k pageviews</h1>
    <UnstyledSlider min={MIN} max={MAX} data={data} handleChange={changeHandler} />
      <p className='sliderLable'>
      <span className='price'>${( data.monthlyBilling ? data.price*0.8 : data.price ).toFixed(2)}</span><span>/ month</span>
      </p>
      <div className='options'>
        <p>
          <span className='label'>Monthly Billing</span>
    <UnstyledSwitches data={data} handleToggle={toggleHandler} />
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
