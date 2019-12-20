import React, { Component } from 'react';

import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
  render() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link onClick={this.state.isOpen? this.handleToggle:null} to='/'>
                        <img src={logo} alt="Logo"/>
                    </Link>

                    <button onClick={this.handleToggle} type="button" className='nav-btn'>
                        <FaAlignRight className='nav-icon'/>
                    </button>
                </div>
                <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'}>
                    <li><Link onClick={this.handleToggle} to='/'>Home</Link></li>
                    <li><Link onClick={this.handleToggle} to='/rooms'>Rooms</Link></li>
                </ul>
            </div>
        </nav>
    )
  }
}
