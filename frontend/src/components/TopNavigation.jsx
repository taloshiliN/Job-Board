import React from 'react'
import '../styles/topnavigation.css'
function TopNavigation() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="topnav">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
              <button>
                <i className="fa fa-search"></i>
              </button>
          </div>
          <div className="icons">
            <button>
              <i className="fa fa-filter"></i>
            </button>
            <button>
              <i className="fa fa-user"></i>
            </button>
          </div>
      </div>
    </>
  )
}

export default TopNavigation