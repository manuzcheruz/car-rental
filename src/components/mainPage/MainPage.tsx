import React from 'react';
import { Arrow } from '../../assets/icons';
import Aux from '../../hoc/Aux';

import './MainPage.css';

function mainPage() {
//just need a background picture
return (
    <Aux>
        <div className="top">
            <div className="title">
                Rental Car
            </div>
            <div className="sub">
                Find your favourite car with a good price
            </div>
        </div>
        <div className="bottom">
            <div className="button">
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
            </div>
        </div>
    </Aux>
)
}

export default mainPage;