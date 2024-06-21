import { ToggleButton } from "@mui/material";
import "./styles.css"
import { BiToggleLeft } from "react-icons/bi";
import Modal from "../../components/modal/modal";
import { useState } from "react";
import { Link } from "react-router-dom";
const NewCampaign = () => {
    const [modal, setModal] = useState(false);
    return ( 
        <div>
            <div className="edit-section">
            {
              modal &&  <Modal setModal={setModal}  />
            }
                <div className="fields">
                    <span className="header">Create a new campaign</span>
                </div>
                <div>
                    <span>Campaign name *</span><br />
                    <input type="text" className="full-width" placeholder="e.g The future is now" />
                </div>
                <div>
                    <span>Campaign Description</span><br />
                    <textarea name="" id="" className="full-width h" placeholder="please add a campaign description"></textarea>
                </div>
                
                <div className="flex">
                    <div className="date">
                        <span>Start Date</span><br />
                        <input type="text" placeholder="dd/mm/yy"/>
                    </div>
                    <div className="date">
                        <span>End Date</span><br />
                        <input type="text" placeholder="dd/mm/yy"/>
                    </div>
                </div>
                <div className="flex">
                    <span>Want to receive daily digest about the campaign?</span>
                    <BiToggleLeft/>
                </div>
                <div>
                    <span>Linked keywords *</span><br />
                    <textarea className="full-width h" name="" id="" placeholder="to add keywords,type on your keyboard and press enter"></textarea>
                </div>
                <div>
                    <span>Kindly select how often you want to receive daily digest</span><br />
                    <select name="" id="" className="opt-select" >
                        <option value="">select</option>
                    </select>
                </div>
                <div style={{display:"flex",gap:"10px"}}>
                    <Link to="/" className="outline-btn btn" style={{textAlign:"center"}} >cancel</Link>
                    <button className="btn green-btn" onClick={()=>{setModal(true)}}>Create Campaign</button>
                </div>
            </div>
        </div>
     );
}
 
export default NewCampaign;