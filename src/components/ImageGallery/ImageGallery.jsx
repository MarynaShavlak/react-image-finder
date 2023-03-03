import { ImageGalleryItem } from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import React from 'react';
import { GalleryItem, GalleryList } from './ImageGallery.styled';


export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <GalleryItem key={image.id}>
          <ImageGalleryItem image={image} />
        </GalleryItem>
      ))}
    </GalleryList>
  )
}

GalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  )
}