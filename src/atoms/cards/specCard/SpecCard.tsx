import './SpecCard.css';

export interface SpecCardProps {
    spec: string;
    val: string;
    color?: string;
}

function SpecCard(props: SpecCardProps) {
    return (
        <div>
            <div className="spec-card">
                <div className="left">
                    <div className="title">
                        {props.spec} 
                    </div>
                    <div className="sub">
                        {props.val} 
                    </div>
                </div>
                <div className="right">
                    {props.color && <div style={{ marginTop: '25px', height: '15px', width: '15px', borderRadius: '50%', backgroundColor: '#F0E205' }}></div>}
                </div>
            </div>
        </div>
    )
}

export default SpecCard;