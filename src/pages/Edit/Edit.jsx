import { BiArrowBack } from "react-icons/bi";
import "./edit.css"
import { Link, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { FcCancel } from "react-icons/fc";
import { TiCancel } from "react-icons/ti";
import { HiXMark } from "react-icons/hi2";
const Edit = () => {
    const {id} = useParams()
    const [data,setData] = useState([])
    const [Keywords,setKeywords] = useState([])
    useEffect(()=>{
        fetch("https://infinion-test-int-test.azurewebsites.net/api/Campaign/"+id)
        .then(res =>{
             return res.json()
        })
        .then(data =>{
             setData(data)
             setKeywords(data.linkedKeywords)
         })
    },[id])
    return ( 
        <div className="container">
            <div className="edit-section">

            <div className="flex">
                <Link to="/campaign"className="arrow-Back">
                    <BiArrowBack/> Back
                </Link>
            </div>
            <div className="flex">
                <span className="header">
                    Campaign Information
                </span>
                <div className="status">
                    <span>Campaign Status</span>
                    <span className={data.campaignStatus === "Inactive" ? "red" : "green"}>{data.campaignStatus}</span>
                </div>
            </div>

            <div className="fields">
                <div>
                    <span>Campaign Name</span><br />
                    <input type="text" placeholder={data.campaignName} className="full-width" />
                </div>
                
                <div className="flex">
                    <div className="date">
                        <span>Start Date</span><br />
                        <input type="text" placeholder={data.startDate}/>
                    </div>
                    <div className="date">
                        <span>End Date</span><br />
                        <input type="text" placeholder={data.endDate}/>
                    </div>
                </div>
                <div>
                    <span>Linked Keywords</span><br />
                    <div className="full-width height">
                        {Keywords.map((word , i)=>{
                            return <span className="keyword" key={i}>{word} <HiXMark fill="white"/></span>
                        })}
                    </div>
                </div>
                <div>
                    <span>Want to receive daily digest campaign?</span><br />
                    <select name="spam" className="spam" id="">
                        <option value="yes">yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <span>Kindly select the time you want to visit daily digest</span><br />
                    <select name="" id="">
                        <option value="">{data.dailyDigest}</option>
                    </select>
                </div>
            </div>
            <div className="all-btn">
                <button className="btn danger-btn">Stop Campaign</button>
                <button className="btn outline-btn">Edit Information</button>
            </div>
            </div>
        </div>
     );
}
 
export default Edit;