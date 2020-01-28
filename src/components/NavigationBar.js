import React from 'react';
import Logo from './images/logo.png';
import { Route, Link } from 'react-router-dom';

class NavigationBar extends React.Component{
    render(){
        return(
        <div className ='navigation-bar'>
            <div className ='logo'><img alt='' className ='vtk' src={Logo} /></div>
                <p className='iverson'>Iverson</p>
                <div className='menue'>
                <div>
                    <Link to = '.'>Home</Link>
                </div>
                <div className='dropdown'>
                    <button className='dropButton'>Antenna
                        <i className='arrowDown'></i>
                    </button>

                    <div className = 'dropdownContent'>
                        <Link to = 'add_antenna'>add</Link>
                        <Link to = 'map_antenna'>map</Link>
                        <Link to = 'table_antenna'>list</Link>
                    </div>
                </div>
                <div className='dropdown'>
                    <button className='dropButton'>User
                        <i className='arrowDown'></i>
                    </button>
                    <div className='dropdownContent'>
                        <Link to='add_user'>add</Link>
                        <Link to='confirm_user'>confirm</Link>
                        <Link to='table_user'>list/search</Link>
                    </div>
                </div>
                <a href='#'>Logout</a>
            </div>
        </div>
        );
    }
}

export default NavigationBar;