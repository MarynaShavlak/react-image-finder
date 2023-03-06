
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Image} from "./ImageGalleryItem.styled"
import { ImageModal } from 'components/ImageModal';


export const ImageGalleryItem =({image}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  }
 
  const { webformatURL, largeImageURL, tags } = image;
    return (
      <>
       
        <Image
          src={webformatURL}
          alt={tags}
          onClick={toggleModal}
        />
        {isModalOpen &&
          <ImageModal
            onCloseModal={toggleModal}
          >
            <img src ={largeImageURL} alt={tags} />
          </ImageModal>
         
        }
      </>
      
    )

}
   ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };