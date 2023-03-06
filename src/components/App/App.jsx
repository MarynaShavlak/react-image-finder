import React, { useState, useEffect } from 'react';
import { Container } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout';
import { SearchBar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import * as API from 'services/api';
import * as Notification from 'utils/notifications';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';




export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    if (!query) return;
    async function fetchImages(){
      try {
      setIsLoading(true);
       const response = await API.requestImages(query, page);
       const { hits: images, totalHits: maxQuantityOfImagesToShow } = response;

       if (images.length === 0) {
         return Notification.showFailureNotification();
       }
        setImages(prevImages => [...prevImages, ...images]);
        setShowLoadMoreBtn(true);
        setError(false);
       
       if (page === 1) {
         Notification.showSuccessNotification(maxQuantityOfImagesToShow);
       }

       if (page === Math.ceil(maxQuantityOfImagesToShow / 12)) {
         setShowLoadMoreBtn(false);
         Notification.showInfoNotification();
      }

     } catch(error) {
       setError(true);
     } finally {
       
      setIsLoading(false);
    }
    }
    fetchImages();
  },[page, query]
)

  const handleSetSearchQuery = (searchedQuery) => {
    setQuery(searchedQuery);
    setPage(1);
    setImages([]);
  }

  const updatePage = () => {
    setPage(prevPage => prevPage + 1);
  }
    return (
      <Layout>
        <SearchBar onSubmit ={handleSetSearchQuery}></SearchBar>
        <Container>
          {error &&
            <ErrorMessage>
              <p>Ooops, something went wrong..Please reload page and try again</p>
              {renderIcons('error',iconSize.lg)}
            </ErrorMessage>
          }
          {images.length !== 0 &&
            <>
            <ImageGallery images={images}></ImageGallery>
             
            {showLoadMoreBtn && <LoadMoreButton onClick={updatePage}></LoadMoreButton>}
            </>
          }
          {isLoading && <Loader/> }
          <ToastContainer
            position="top-right"
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover={false}
            theme="colored"
            autoClose={3000} />
        </Container>
      </Layout>
      
    );

  
};
