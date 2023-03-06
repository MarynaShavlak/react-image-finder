import React, {useEffect} from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from './ImageModal.module.css';


const modalRoot = document.querySelector('#modal-root');

export const ImageModal = ({onCloseModal, children}) => {
  
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                    onCloseModal();
            }    
        }    
        window.addEventListener('keydown', handleKeyDown);
        
        return () => { window.removeEventListener('keydown', handleKeyDown) };

  },[onCloseModal])

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onCloseModal();
        }
    }

    
        return createPortal(
            <div className={css.overlay} onClick={handleBackdropClick}>
                <div className={css.modal}>
                    {children}
                </div>
            </div>, modalRoot)
    
};


ImageModal.propTypes = {
        onCloseModal: PropTypes.func.isRequired,
        children: PropTypes.node.isRequired,
    };