import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../../assets/icons';

import './MainPage.css';

function mainPage() {
return (
    <div className="main-wrapper">
        <div className="top">
            <div className="title">
                Rental Car
            </div>
            <div className="sub">
                Find your favourite car with a good price
            </div>
        </div>
        <div className="main-mid">
        </div>
        <div className="bottom">
            <div className="button">
                <Link to='/home'>
                    <button className="btn">
                        <div style={{marginTop: '15px', marginLeft: '15px'}}>
                            Get Started 
                        </div>
                        <div style={{ marginTop: '9px', marginRight: '20px' }}>
                            <span>
                                <Arrow height='30' color='white' />
                            </span>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    </div>
)
}

export default mainPage;