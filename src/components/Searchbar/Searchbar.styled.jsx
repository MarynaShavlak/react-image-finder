import styled from 'styled-components';
import { IconButton } from 'components/IconButton';

export const SearchFilter = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #f66fa5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  /* align-items: center; */
  width: 100%;

  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled(IconButton)`
    display: inline-block;
    border: 0;
    background-color: transparent;
    border-radius: 0;
    cursor: pointer;
    outline: none;
   
`
export const SearchFormInput = styled.input`
      height: 50px;
      width: 100%;
      padding-left: 70px;
      font-size: 24px;
      font-weight: 600;
      color: #f66fa5;
      border: none;
      outline: none;
      padding-left: 20px;
      padding-right: 4px;
      ::placeholder {
        font: inherit;
        font-size: 24px;
}
` ;

// .SearchForm-button {
//   display: inline-block;
//   width: 48px;
//   height: 48px;
//   border: 0;
//   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
//   background-size: 40%;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;
// }