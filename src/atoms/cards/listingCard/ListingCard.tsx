import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from '../../../assets/icons';
import { ListingProps } from '../../../components/homeScreen/HomeScreen';

import './ListingCard.css';

function ListingCard(props: ListingProps) {
    return (
        <div>
            <div className="single">
                <div className="top">
                    <div className="title">
                        {props.name}
                    </div>
                    <div className="sub">
                        {props.year}
                    </div>
                </div>
                <div className="mid">
                    <Link to='/detail-page'>
                        <img style={{paddingTop: '45px'}} alt='' src={props.image} height='70' width='100%' />
                    </Link>
                </div>
                <div className="bottom-single">
                    <div className="price">
                        <div className="title">
                            DAILY
                        </div>
                        <div className="price-val">
                            {props.amaount}
                        </div>
                    </div>
                    <div className="rating">
                        <span style={{marginRight: '3px'}}>
                            <Star height='13' color='orange' />
                        </span>
                        {props.rating}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCard;
