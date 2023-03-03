import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showLoadMoreBtn: false,
    isLoading: false,
    error: false,
  }
  

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
 

   if (prevState.query !== query || prevState.page !== page) {
     try {
      this.setState({ isLoading: true })
       const response = await API.requestImages(query, page);
       const { hits: images, totalHits: maxQuantityOfImagesToShow } = response;

       if (images.length === 0) {
         return Notification.showFailureNotification();
       }


      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        showLoadMoreBtn: true,
        error: false,
      }));
       
       if (page === 1) {
         Notification.showSuccessNotification(maxQuantityOfImagesToShow);
       }

       if (page === Math.ceil(maxQuantityOfImagesToShow / 12)) {
         this.setState({showLoadMoreBtn: false});
         Notification.showInfoNotification();
      }

     } catch(error) {
       this.setState({error: true})
     } finally {
       
      this.setState({ isLoading: false })
    }
    }
  }
  
  handleSetSearchQuery=(searchedQuery) => {
    this.setState({
      query: searchedQuery,
      page: 1,
      images: [],
    });
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }




  render() {
    const { images, showLoadMoreBtn, isLoading, error } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit ={this.handleSetSearchQuery}></SearchBar>
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
             
            {showLoadMoreBtn && <LoadMoreButton onClick={this.handleLoadMore}></LoadMoreButton>}
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
  }
  
};
