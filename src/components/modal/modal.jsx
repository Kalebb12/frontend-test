import "./modal.css"
const Modal = ({title,des,btns,setModal}) => {
    return (
        <div className="overlay" onClick={()=>setModal(false)}>

        <div className="modal">
            <div className="flex-col">
                <div className="title">{title}</div>
                <div className="des">{des}</div>
                <div className={btns.length > 1?"btns-container" :"btn-container"}>
                    {btns.map((btn,i)=>{
                        return <button className="res-btn">{btn}</button>
                    })}
                </div>
            </div>
        </div>
                    </div>
    );
}
 
export default Modal;