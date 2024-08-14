import Badges from "../components/Badges";
import Icons from "../components/Icons";
import '../styles/Body.css'; 

const Body = () => {
    return (
        <div className="body-container">
            <div className="icons-container">
                <Icons />
            </div>
            <div className="badges-container">
                <Badges />
            </div>
        </div>
    )
}

export default Body;
