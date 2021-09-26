import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './HomeScreen.css';
import ListingCard from '../../atoms/cards/listingCard/ListingCard';
import TopCard from '../../atoms/cards/topCard/TopCard';
import { User, Dot, BookMark, Right, Home, Plus } from '../../assets/icons';
import ferari from '../../assets/images/ferari.png';
import lambo1 from '../../assets/images/ford.png'
import nissan from '../../assets/images/nissan.png';

export interface ListingProps {
    name: string;
    year: string;
    image: string;
    rating: string;
    amaount: string;
}

const listingData: ListingProps[] = [
    {
        name: 'Ferari',
        year: '2019 Full',
        image: ferari,
        rating: '4.8',
        amaount: '$600'
    },
    {
        name: 'Nissan',
        year: '2020 Full',
        image: nissan,
        rating: '5.0',
        amaount: '$700'
    },
    {
        name: 'Ford',
        year: '2017 Full',
        image: lambo1,
        rating: '4.6',
        amaount: '$550'
    }
]

export interface SlideDataProps {
    image: string;
    name: string;
    price: string;
}

const slideData: SlideDataProps[] = [
    {
        image: nissan,
        name: 'Nissan GT-R',
        price: '$700 Per Month'
    },
    {
        image: ferari,
        name: 'Ferari',
        price: '$600 Per Month'
    },
    {
        image: lambo1,
        name: 'Ford',
        price: '$550 Per Month'
    }
]

function HomeScreen() {
    return (
        <div className="home-wrapper">
            <div className="profile">
                <div className="image">
                    <div style={{marginTop: '7px', marginLeft: '12px'}}>
                        <span>
                            <User color='grey' height='30' />
                        </span>
                    </div>
                </div>
                <div className="description">
                    <div className="head">
                        Welcome
                    </div>
                    <div className="name">
                        Jazmine Moreno
                    </div>
                </div>
            </div>
            <div className="carousel">
                <CarouselProvider
                    naturalSlideWidth={110}
                    naturalSlideHeight={85}
                    totalSlides={3}
                >
                    <Slider>
                        {slideData.map((el, i) => {
                            return (
                                <Slide className="slider" key={i} index={i}><TopCard {...el} /></Slide>
                            )
                        })}
                    </Slider>
                    <ButtonBack className="nav"><span><Dot color='blue' height='7' /></span></ButtonBack>
                    <ButtonNext className="nav"><span><Dot color='grey' height='7' /></span></ButtonNext>
                    <ButtonNext className="nav"><span><Dot color='grey' height='7' /></span></ButtonNext>
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
                    {listingData.map((el, i) => {
                        return (
                            <ListingCard {...el} key={i} />
                        )
                    })}
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
                    <div style={{marginTop: '10px', marginLeft: '20px'}}>
                        <span className="home">
                            <Home color='#314FFB' height='22' />
                        </span>
                    </div>
                    <div style={{ textAlign: 'right', marginRight: '20px', marginTop: '10px'}}>
                        <span className="bookmark">
                            <BookMark height='22' color='grey' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;