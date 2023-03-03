
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Image} from "./ImageGalleryItem.styled"
import { ImageModal } from 'components/ImageModal';


export class ImageGalleryItem extends Component {

  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };


  state = {
    isModalOpen: false,
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    isModalOpen ? this.setState({ isModalOpen: false }) : this.setState({ isModalOpen: true })
  }
 
  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
       
        <Image
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {isModalOpen &&
          <ImageModal
            onCloseModal={this.toggleModal}
          >
            <img src ={largeImageURL} alt={tags} />
          </ImageModal>
         
        }
      </>
      
    )
  }
}
  
  