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
                    <Link to = '/interface.php'>Home</Link>
                </div>
                <div className='dropdown'>
                    <button className='dropButton'>Antenna
                        <i className='arrowDown'></i>
                    </button>

                    <div className='dropdownContent'>
                        <a href='#'>add</a>
                        <a href='/antenna/map.php'>map</a>
                        <Link to = 'router_test'>list</Link>
                    </div>
                </div>
                <div className='dropdown'>
                    <button className='dropButton'>User
                        <i className='arrowDown'></i>
                    </button>
                    <div className='dropdownContent'>
                        <a href='/user/new.php'>add</a>
                        <a href='#'>confirm</a>
                        <a href='/user/list.php'>list/search</a>
                    </div>
                </div>
                <a href='/scripts/logout.php'>Logout</a>
            </div>
        </div>
        );
    }
}

export default NavigationBar;