import React, { Component } from 'react'

class HeaderComponents extends Component {
  render() {
    return (
      <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <a href="#" className='navbar-brand'>Employee Mangament APP</a>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}
export default HeaderComponents;
