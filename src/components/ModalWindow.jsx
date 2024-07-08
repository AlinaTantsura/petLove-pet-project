import sprite from "../assets/images/sprite.svg";
import ReactDOM from "react-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ModalWindow = ({ open, children, onClose}) => {

    useEffect(() => {
        const handleCloseModalByEsc = (e) => {
            if(e.key === "Escape") onClose(false)
        }
        document.addEventListener("keyup", handleCloseModalByEsc);
       
        return () => {
            document.removeEventListener("keyup", handleCloseModalByEsc);
        }
    }, [onClose]);

    if (!open) return null
    
  return ReactDOM.createPortal(
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-1000 bg-black-main bg-opacity-50" onClick={onClose}>
          <div className="bg-white relative w-auto rounded-[30px] " onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-5 right-5 w-6 h-6" onClick={onClose}>
                <svg className="w-6 h-6 stroke-black-main">
                    <use href={sprite + "#icon-x"} />
                </svg>
              </button>
              {children}
          </div>
      </div>,
      document.getElementById("portal")
  )
}

export default ModalWindow