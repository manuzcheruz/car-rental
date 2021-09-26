import Arrow from '../../../assets/icons/arrow';
import './TopCard.css';
import { Link } from 'react-router-dom';
import { SlideDataProps } from '../../../components/homeScreen/HomeScreen';

function TopCard(props: SlideDataProps) {
    return (
        <div className="top-card">
            <div className="image">
                <img src={props.image} height='120' width='100%' alt='' />
            </div>
            <div className="bottom-top">
                <div className="body">
                    <div className="text">
                        <div className="title">
                            {props.name}
                        </div>
                        <div className="sub">
                            {props.price}
                        </div>
                    </div>
                    <div className="btn">
                        <Link to='/detail-page'>
                            <button style={{ marginTop: '10px', marginRight: '10px', background: '#314FFB', height: '50px', width: '50px', border: 'none', borderRadius: '8px'}}>
                                <div>
                                    <span>
                                        <Arrow height='25' color='white' />
                                    </span>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCard;