import * as React from 'react'
import Pricing from './components/Pricing'
import './scss/_App.scss'

function App() {
  return (
   <main className='component-container'>
    <div className='background1'>
      
    </div>
      <div className='background2'></div>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial.<br/> No credit card required.</p>
      </header>
    <Pricing />
    </main> 
  )
}

export default App
