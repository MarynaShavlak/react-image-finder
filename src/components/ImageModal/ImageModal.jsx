import React, {Component} from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from './ImageModal.module.css';


const modalRoot = document.querySelector('#modal-root');

export class ImageModal extends Component {
    static propTypes = {
        onCloseModal: PropTypes.func.isRequired,
        children: PropTypes.node.isRequired,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onCloseModal();
        }
    }

    render() {
        return createPortal(
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    {this.props.children}
                </div>
            </div>, modalRoot)
    }
};