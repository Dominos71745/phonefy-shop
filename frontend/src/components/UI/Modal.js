import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed p-4 top-15 z-30 w-40 left-[calc(50%-20rem)] bg-white overflow-y-auto max-h-[80vh] rounded-3xl">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
