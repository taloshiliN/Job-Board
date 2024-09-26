import React from 'react'
import TopNavigation from '../components/TopNavigation'
import '../styles/home.css'
function Home() {
  return (
    <>
      <TopNavigation />
      <div className='Header'>
        <div className='Top'>
          <h2 className='WorkWave'>WorkWave</h2>
          <h2>Brand Profile</h2>
          <h2>Check Profiles</h2>
          <h2>Sign In</h2>
        </div>
        <div className='Info'>
          <h1>Welcome to 
            WorkWave!!!
          </h1>
          There's suppose to be words here
        </div>
        <div className='header-buttons'>
          <button>Request a demo</button>
          <button>Post a Job</button>
        </div>
      </div>
      <div className='Benefits'>
        <h2>Unlock the benefits of WorkWave</h2>
        <h3>Elevate Your Hiring Strategy to New Heights with Workwave's comprehensive solutions</h3>
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