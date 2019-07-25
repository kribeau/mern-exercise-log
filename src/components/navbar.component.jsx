import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-info navbar-expand-lg shadow">
        <Link to="/" className="navbar-brand">
          每日锻炼{' '}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                主页
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                新建日志
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                新建用户
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
