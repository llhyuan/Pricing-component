import Pricing from './Pricing'
import Slider from './Slider'
import '../scss/_App.scss'

function App() {
  return (
    <main className='component-container'>
      <div className='background'></div>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </header>
      <Pricing />
    <Slider />
    </main>
  )
}

export default App
