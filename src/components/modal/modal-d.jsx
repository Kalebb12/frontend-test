import "./modal.css"
const ModalD = ({setModal,name,handleDelete,id}) => {
    return (
        <div>
        <div className="overlay" onClick={()=>setModal(false)}> </div>
        <div className="modal">
            <div className="flex-col">
                <div className="title">Stop Campaign</div>
                <div className="des">{`Are you sure you want to delete ${name} campaign this action can't be undone`}</div>
                <div className="btns-container">
                    <button className="res-btn" onClick={()=>setModal(false)}>Cancel</button>
                    <button className="res-btn" onClick={()=>handleDelete(id)}>Delete Campaign</button>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default ModalD;