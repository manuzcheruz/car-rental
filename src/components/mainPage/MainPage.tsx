import React from 'react';
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
                    Get Started <span>

                    </span>
                </button>
            </div>
        </div>
    </Aux>
)
}

export default mainPage;