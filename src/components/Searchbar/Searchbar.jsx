import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { SearchFilter, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import * as Notification from 'utils/notifications';

export const SearchBar =({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = ({ target: { name, value } }) => {
    setQuery(value.toLowerCase());
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return Notification.showWarnNotification();;
    }

    onSubmit(query);
    reset();
  }

  const reset = () => {
   setQuery('')
  }

 
    return (
      <SearchFilter>
      <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={query}
          onChange={handleInputChange}
          />          
          <SearchFormButton type='submit' aria-label='Search button'>
            {renderIcons('search', iconSize.sm)}
        </SearchFormButton>
      </SearchForm>
    </SearchFilter>
    )
}



SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
