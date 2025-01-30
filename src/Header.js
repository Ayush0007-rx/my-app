
import React from 'react';
import logo from './image2.jpg';
import './App.css';

function Header() {
  return (
    <header style={headerStyle}>
      <div className="logo" style={{ display: 'flex', paddingLeft: '50px' }}>
        <img src={logo} alt="UnStop Logo" style={logoStyle} />
        <input type="text" placeholder="Search Opportunities." style={searchBarStyle} />
          <ul className='nav-list' style={{ display: 'flex', listStyleType: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '1px', marginBottom: '1px' }}>
            <li style={{ paddingRight: '30px' }}>Internship</li>
            <li style={{ paddingRight: '30px' }}>Jobs</li>
            <li style={{ paddingRight: '30px' }}>Competitions</li>
            <li style={{ paddingRight: '30px' }}>Mentorships</li>
            <li style={{ paddingRight: '30px' }}>Practice</li>
            <li style={{ paddingRight: '1px' }}>|</li>
            <li style={{ paddingRight: '15px', paddingLeft: '15px' }}><button style={{ fontSize: '20px', backgroundColor: '#1E407C', color: '#FFFFFF', borderRadius: '15px' }}><p style={{ margin: '7px' }}>Login</p></button></li>
            <li style={{ paddingRight: '1px' }}>|</li>
            <li style={{ paddingRight: '5px', paddingLeft: '15px' }}><button style={{ fontSize: '20px', backgroundColor: '#FFFFFF', borderRadius: '20px' }}><p style={{ margin: '7px' }}>+ Host</p></button></li>
            <li style={{ paddingRight: '5px', paddingLeft: '5px' }}><button style={{ fontSize: '20px', backgroundColor: '#FaFad2', borderRadius: '20px',  borderColor:'f0e68c' }}><p style={{ margin: '7px' }}>For Business</p></button></li>
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
  width: '130px',
  height: '53px',
  marginRight: '20px'
};

const searchBarStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginRight: '20px',
  borderRadius:'50px',
  marginRight:'400px',
  fontSize:'15px'
};

export default Header;