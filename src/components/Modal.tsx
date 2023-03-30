import React, { useCallback, useEffect } from "react";
import "../styles/modal.css";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
    children?: React.ReactNode;
    stateSetter: React.Dispatch<React.SetStateAction<any>>;
}

function Modal(props: ModalProps) {
  const escFunction = useCallback((e: { key: string; }) => {
    if (e.key === "Escape") {
      props.stateSetter("");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);


  return (
    <>
      {
        <div
          className="modal-bg"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              props.stateSetter("");
            }
          }}
        >
          <div className="modal">
            <button
              className="icon modal-close"
              aria-label="modal-close"
              onClick={() => props.stateSetter("")}
            >
              <FaTimes />
            </button>
            {props.children}
          </div>
        </div>
      }
    </>
  );
}

export default Modal;
