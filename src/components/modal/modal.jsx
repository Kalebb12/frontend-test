import { Link, useNavigate } from "react-router-dom";
import "./modal.css"
import successImg from "/success.svg"
const Modal = ({setModal}) => {
    const navigate = useNavigate()
    const Navigate = () => {
        navigate("/React-Task/")
    }
    return (
        <div className="overlay" onClick={Navigate}>

        <div className="f-modal">
            <div className="flex-col">
                <div className="img"><img src={successImg} alt="" /></div>
                <div className="des">Campaign successfully created!</div>
                <div className="btn-container">
                    <Link to="/Campaign" className="btn green-btn" style={{paddingLeft:"20px",paddingRight:"20px"}}>go back to camaign list</Link>
                </div>
            </div>
        </div>
                    </div>
    );
}
 
export default Modal;