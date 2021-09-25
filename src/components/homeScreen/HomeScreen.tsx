import React from 'react';
import Aux from '../../hoc/Aux';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './HomeScreen.css';
import ListingCard from '../../atoms/cards/listingCard/ListingCard';
import TopCard from '../../atoms/cards/topCard/TopCard';
import Plus from '../../assets/icons/plus';
import Home from '../../assets/icons/home';
import Right from '../../assets/icons/right';
import BookMark from '../../assets/icons/bookmark';

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
                    naturalSlideHeight={80}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide className="slider" index={0}><TopCard /></Slide>
                        <Slide index={1}><TopCard /></Slide>
                        <Slide index={2}><TopCard /></Slide>
                    </Slider>
                    <ButtonBack className="nav">&middot;</ButtonBack>
                    <ButtonNext className="nav">&middot;</ButtonNext>
                    <ButtonNext className="nav">&middot;</ButtonNext>
                </CarouselProvider>
            </div>
            <div className="middle">
                <div className="title">
                    <div className="left">
                        Luxury Cars
                    </div>
                    <div className="right" style={{ display: 'grid', gridTemplateColumns: '1fr 0.2fr' }}>
                        <div>
                            See More 
                        </div>
                        <div>
                            <span style={{marginLeft: '5px', marginTop: '10px'}}>
                                <Right color='#314FFB' height='20' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="listing">
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                </div>
            </div>
            <div className="bottom-home">
                <div className="plus">
                    <div style={{marginTop: '12px'}}>
                        <span className="icon">
                            <Plus height='20' color='white' />
                        </span>
                    </div>
                </div>
                <div className="bar">
                    <div style={{marginTop: '7px', marginLeft: '20px'}}>
                        <span className="home">
                            <Home color='#314FFB' height='30' />
                        </span>
                    </div>
                    <div>
                        <span className="bookmark">
                            <BookMark height='30' />
                        </span>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default HomeScreen;