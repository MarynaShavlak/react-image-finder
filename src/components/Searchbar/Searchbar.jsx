import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SearchFilter, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import * as Notification from 'utils/notifications';

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    query: '',
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({[name]: value.toLowerCase()})
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return Notification.showWarnNotification();;
    }

    this.props.onSubmit(this.state.query);
    this.reset();
  }

  reset() {
    this.setState({query: ''})
  }

  render() {
    return (
      <SearchFilter>
      <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={this.state.query}
          onChange={this.handleInputChange}
          />          
          <SearchFormButton type='submit' aria-label='Search button'>
            {renderIcons('search', iconSize.sm)}
        </SearchFormButton>
      </SearchForm>
    </SearchFilter>
    )
}

}
