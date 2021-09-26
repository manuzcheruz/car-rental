import React from 'react';

import './ListingCard.css';

function ListingCard() {
    return (
        <div>
            <div className="single">
                <div className="top">
                    <div className="title">
                        Audi R8
                    </div>
                    <div className="sub">
                        2019 Full
                    </div>
                </div>
                <div className="mid">

                </div>
                <div className="bottom-single">
                    <div className="price">
                        <div className="title">
                            DAILY
                        </div>
                        <div className="price-val">
                            $700
                        </div>
                    </div>
                    <div className="rating">
                        <span>

                        </span>
                        5.0
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCard;
