import { Arrow, ArrowLeft, Bookmark2 } from '../../assets/icons';
import SpecCard from '../../atoms/cards/specCard/SpecCard';
import './DetailPage.css';

function DetailPage() {
    return (
        <div className='wrapper'>
            <div className="detail-top">
                <div className="right">
                    <div>
                        <span>
                            <ArrowLeft height='30' color='blue' />
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
                        Chevrolete
                    </div>
                    <div className="sub">
                        Camaro
                    </div>
                </div>
                <div className="image">

                </div>
            </div>
            <div className="spec">
                <div className="title">
                    Specifications
                </div>
                <div className="specs1">
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
                </div>
                <div className="specs2">
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
                </div>
            </div>
            <div className="price">
                <div className="title">
                    Price
                </div>
                <div className="prices">
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
                    <SpecCard spec='Color' val='Red' />
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