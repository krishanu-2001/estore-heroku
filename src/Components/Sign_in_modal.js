import React from "react";
import ReactDOM from "react-dom";
import './Comp-CSS/SignInUp_modal.css';

const Modal = React.forwardRef((props, ref)=>{

    const [display, setDisplay] = React.useState(false);

    React.useImperativeHandle(ref, () => {
        return {
         openModal: ()=> open(),
         close: ()=> close()
        }
      });

    const open = ()=>{
    setDisplay(true);
    };
    
    const close = ()=>{
    setDisplay(false);
    };
    
    if(display)
    {
        return ReactDOM.createPortal(
            <div className = {"modal-wrapper"}>
                <div onClick={close} className={"modal-backdrop"}>
                    <div className={"modal-box"}>
                        <h1>This is login modal</h1>
                      <button onClick={close}>Close</button>
                    </div>
                </div>
            </div>,
            document.getElementById('modal-root')
        );
    }
    else{ return null; };
});


export default Modal;