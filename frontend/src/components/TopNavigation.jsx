import React from 'react'
import '../styles/topnavigation.css'
function TopNavigation() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="topnav">
          <div className="topnav-items">
            {/* <input type="text" placeholder="Search" /> */}
            <a href="#">Resource Library</a>
            <a href="#">Sign In</a>
            <a href="#">Support</a>
            <a href="#">Contact Sales</a>
              <button>
                <i className="fa fa-search"></i>
              </button>
          </div>
      </div>
    </>
  )
}

export default TopNavigation