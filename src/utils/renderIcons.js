import { ImSearch } from 'react-icons/im';
import { FaRegSadCry } from 'react-icons/fa';

export function renderIcons(param, size) {
  switch (param) {
    case 'search':
      return <ImSearch size={size} className="contact-form__icon" />;
    case 'error':
      return <FaRegSadCry size={size} className="contact-form__icon" />;
    default:
      return <span>icon</span>;
  }
}
