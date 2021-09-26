
import Arrow from '../../../assets/icons/arrow';
import './TopCard.css';

function TopCard() {
    return (
        <div className="top-card">
            <div className="image">

            </div>
            <div className="bottom-top">
                <div className="body">
                    <div className="text">
                        <div className="title">
                            BMW m2 competition
                        </div>
                        <div className="sub">
                            $4600 per month
                        </div>
                    </div>
                    <div className="btn">
                        <button style={{ marginTop: '10px', marginRight: '10px', background: '#314FFB', height: '50px', width: '50px', border: 'none', borderRadius: '8px'}}>
                            <div>
                                <span>
                                    <Arrow height='25' color='white' />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCard;