import React from 'react';
import Logo from './images/logo.png';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component{
    render(){
        return(
            <div className ='navigation-bar'>
                <Link to = '/dashboard'>
                    <div className ='logo'>
                        <img alt='' className ='vtk' src={Logo} />
                    </div>
                </Link>
                <p className='iverson'>Iverson</p>
                <div className='menue'>
                    <div>
                        <Link to = '/dashboard'>Home</Link>
                    </div>
                    <div className='dropdown'>
                        <button className='dropButton'>Antenna
                            <i className='arrowDown'></i>
                        </button>

                        <div className = 'dropdownContent'>
                            <Link to = '/dashboard/add_antenna'>add</Link>
                            <Link to = '/dashboard/map_antenna'>map</Link>
                            <Link to = '/dashboard/table_antenna'>list</Link>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <button className='dropButton'>User
                            <i className='arrowDown'></i>
                        </button>
                        <div className='dropdownContent'>
                            <Link to='/dashboard/add_user'>add</Link>
                            <Link to='/dashboard/confirm_user'>confirm</Link>
                            <Link to='/dashboard/table_user'>list/search</Link>
                        </div>
                    </div>
                    <Link to = './'>Logout</Link>
                </div>
            </div>
        );
    }
}

export default NavigationBar;