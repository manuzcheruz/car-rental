import './SpecCard.css';

interface SpecCardProps {
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

                </div>
            </div>
        </div>
    )
}

export default SpecCard;