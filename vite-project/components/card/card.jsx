import "./card.css";
import { Link } from "react-router-dom";
function Card({Describe,source,id}){
    return(
        <>
        
            <div className="Card-Wrapper">
                    <div className="Card-Heading">{Describe}</div>
                    <Link to={`/image/${id}`}>
                    <div className="Image"><img src={source} alt={Describe} /></div>
                    </Link>
            </div>

            
        </>
        
    )
}

export default Card;