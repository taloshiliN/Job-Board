import React from 'react'
import TopNavigation from '../components/TopNavigation'
import '../styles/home.css'
function Home() {
  return (
    <>
      <TopNavigation />
      <div className='Header'>
        <div className='Top'>
          <h1 className='WorkWave'>WorkWave</h1>
        </div>
      </div>
      <div className='Benefits'>
        Benefits
      </div>
      <div className='Articles'>
        Articles
      </div>
      <div className='ReadyToHire'>
        Ready To Hire
      </div>
      <div className='GetStarted'>
        Get Started
      </div>
      <footer>

      </footer>
    </>
  )
}

export default Home