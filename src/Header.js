
import React from 'react';
import './App.css';
import logo from './image2.jpg';

function Header() {
  return (
    <header style={headerStyle}>
        <div className="logo" style={{display: 'flex',paddingLeft: '50px'}}>
        <img src={logo} alt="UnStop Logo" style={logoStyle} />
            <input type="text" placeholder="Search Opportunities." style={searchBarStyle} />
            <ul className='nav-list' style={{display: 'flex', listStyleType: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '1px', marginBottom:'1px'}}>
                <li style={{ paddingRight: '30px' }}>Internship</li>
                <li style={{ paddingRight: '30px'}}>Jobs</li>
                <li style={{ paddingRight: '30px'}}>Competions</li>
                <li style={{ paddingRight: '30px'}}>Mentorships</li>
                <li style={{ paddingRight: '30px'}}>Practice</li>
                <li style={{ paddingRight: '1px'}}>|</li>
                <li style={{ paddingRight: '15px', paddingLeft:'15px'}}><button style={{fontSize:'20px', backgroundColor:'#1E407C', color:'#FFFFFF', borderRadius: '15px'}}><p style={{margin:'7px'}}>Login</p></button></li>
                <li style={{ paddingRight: '1px'}}>|</li>
                <li style={{ paddingRight: '15px', paddingLeft:'15px'}}><button style={{fontSize:'20px', backgroundColor:'#FFFFFF', borderRadius: '15px'}}><p style={{margin:'7px'}}>+ Host</p></button></li>
            </ul>
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyle = {
  width: '120px',
  height: '50px',// Adjust the height as needed
  marginTop: '7px',
  marginRight: '10px', // Optional: Add some margin to separate the logo from the navigation items
};

const searchBarStyle = {
  padding: '20px',
  fontSize: '1em',
  marginLeft: '20px',
  marginRight: '400px',
  borderRadius: '50px'// Optional: Add some margin to separate the search bar from the navigation items
};

export default Header;

