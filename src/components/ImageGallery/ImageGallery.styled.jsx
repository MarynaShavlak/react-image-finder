import styled from "styled-components";

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryItem = styled.li`
border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 15px)/2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 3*15px)/4);
  }

  &:not(:last-child) {
    @media screen and (max-width: calc(768px - 1px)) {
      margin-bottom: 15px;
    }
  }
`;