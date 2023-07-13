import { GrFormClose } from "react-icons/gr"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { MdDone } from "react-icons/md"

const Modal = ({ message, error, changeToggle }) => {
    return (

        <div className="absolute w-[350px] h-[200px] bg-slate-100 rounded flex flex-col items-center relative top-[-25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl">
            <button onClick={changeToggle} className=" ml-auto"><GrFormClose className="w-[30px] h-[30px]" /></button>

            <div className="p-[50px]">
                {error ? <IoMdCloseCircleOutline className=" w-[30px] h-[30px] m-auto" /> : <MdDone className=" w-[30px] h-[30px] m-auto" />}
                <p className=" m-[10px] text-center">{message}</p>
            </div>
        </div >
    )

}

export default Modal