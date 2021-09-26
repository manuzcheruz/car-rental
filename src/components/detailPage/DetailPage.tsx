import { Link } from 'react-router-dom';
import { Arrow, ArrowLeft, Bookmark2 } from '../../assets/icons';
import SpecCard, { SpecCardProps } from '../../atoms/cards/specCard/SpecCard';
import './DetailPage.css';
import nissan from '../../assets/images/nissan.png';

const specData: SpecCardProps[] = [
    {
        spec: 'Color',
        val: 'Yellow',
        color: 'yellow'
    },
    {
        spec: 'Gearbox',
        val: 'Automatic'
    },
    {
        spec: 'Year',
        val: '2020'
    }
]

const specData2: SpecCardProps[] = [
    {
        spec: 'Seat',
        val: '4'
    },
    {
        spec: 'Model',
        val: 'Turbo S'
    },
    {
        spec: 'Type',
        val: 'Full'
    }
]

const priceData: SpecCardProps[] = [
    {
        spec: '12 Months',
        val: '$7200'
    },
    {
        spec: '6 Months',
        val: '$3100'
    },
    {
        spec: '2 Months',
        val: '$1200'
    }
]

function DetailPage() {
    return (
        <div className='wrapper'>
            <div className="detail-top">
                <div className="right">
                    <div>
                        <span>
                            <Link to='/home'>
                                <ArrowLeft height='30' color='blue' />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="left" style={{ height: '40px', width: '40px', background: 'blue', borderRadius: '5px' }}>
                    <div style={{marginTop: '8px', marginLeft: '11px'}}>
                        <span>
                            <Bookmark2 color='white' height='25' />
                        </span>
                    </div>
                </div>
            </div>
            <div className="detail-mid">
                <div className="title">
                    <div className="main">
                        Nissan GT-R
                    </div>
                    <div className="sub">
                        565 HP
                    </div>
                </div>
                <div className="image">
                    <img style={{marginTop: '55px'}} alt='' src={nissan} height='150' width='100%' />
                </div>
            </div>
            <div className="spec">
                <div className="title">
                    Specifications
                </div>
                <div className="specs1">
                    {specData.map((el, i) => {
                        return (
                            <SpecCard key={i} {...el} />
                        )
                    })}
                </div>
                <div className="specs2">
                    {specData2.map((el, i) => {
                        return (
                            <SpecCard key={i} {...el} />
                        )
                    })}
                </div>
            </div>
            <div className="price">
                <div className="title">
                    Price
                </div>
                <div className="prices">
                    {priceData.map((el, i) => {
                        return (
                            <SpecCard key={i} {...el} />
                        )
                    })}
                </div>
            </div>
            <div className="total">
                <div className="text">
                    <div className="main">
                        TOTAL
                    </div>
                    <div className="sub">
                        $1700
                    </div>
                </div>
                <div className="btn">
                    <button>
                        <div style={{marginTop: '12px', marginLeft: '10px'}}>Rent This Car</div>
                        <div style={{ marginTop: '13px', marginLeft: '-5px' }}>
                            <span>
                                <Arrow color="white" height="20" />
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;