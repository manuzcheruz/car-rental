import React from 'react';
import Aux from '../../hoc/Aux';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './HomeScreen.css';
import ListingCard from '../../atoms/cards/listingCard/ListingCard';

function HomeScreen() {
    return (
        <Aux>
            <div className="profile">
                <div className="image">

                </div>
                <div className="description">
                    <div className="head">
                        Welcome
                    </div>
                    <div className="name">
                        Jasmine Moreno
                    </div>
                </div>
            </div>
            <div className="carousel">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={70}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide className="slider" index={0}>I am the first Slide.</Slide>
                        <Slide index={1}>I am the second Slide.</Slide>
                        <Slide index={2}>I am the third Slide.</Slide>
                    </Slider>
                    <ButtonBack className="nav">&middot;</ButtonBack>
                    <ButtonNext className="nav">&middot;</ButtonNext>
                </CarouselProvider>
            </div>
            <div className="middle">
                <div className="title">
                    <div className="left">
                        Luxury Cars
                    </div>
                    <div className="right">
                        See More
                    </div>
                </div>
                <div className="listing">
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                </div>
            </div>
            <div className="bottom">
                <div className="plus">
                    <span className="icon">
                        plus
                    </span>
                </div>
                <div className="bar">
                    <span className="home">

                    </span>
                    <span className="bookmark">
                        
                    </span>
                </div>
            </div>
        </Aux>
    )
}

export default HomeScreen;