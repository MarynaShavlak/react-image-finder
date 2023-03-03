import PropTypes from 'prop-types';

import {
  MoreButton

} from './LoadMoreButton.styled';

export function LoadMoreButton({onClick }) {
  return (
    <MoreButton type='button' onClick={onClick}>
      Load More
    </MoreButton>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}