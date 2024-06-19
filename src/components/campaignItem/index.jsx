import { BsEye } from "react-icons/bs";
import "./styles.css";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
const CampaignItem = ({ obj, index }) => {
  return (
    <div className="container">
      <div className="data-item">
        <span className="span1">{index + "."}</span>
        <span className="span2">{obj.campaignName}</span>
        <span className="span3">{obj.startDate}</span>
        <span className={obj.campaignStatus === "Inactive" ? "red" : "green"}>
          {obj.campaignStatus}
        </span>
        <div className="span5">
          <Link to={`/edit/${obj.id}`}>
            <BsEye />
          </Link>
          <Link to={`/edit/${obj.id}`}>
            <BiEdit />
          </Link>
          <BiTrash />
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
