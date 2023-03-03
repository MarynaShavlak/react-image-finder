import PropTypes from 'prop-types';
import { Error } from './ErrorMessage.styled';


export function ErrorMessage({children}) {
  return (
    <Error>
      {children}
    </Error>
  );

}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
}