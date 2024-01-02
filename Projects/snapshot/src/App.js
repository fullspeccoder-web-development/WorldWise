import { rollIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const rollInAnimation = keyframes`${rollIn}`;

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

export const LoaderDiv = styled.div`
  animation: 1s ${rollInAnimation} linear;
  height: 50px;
  width: 50px;
  background-color: red;
  border-radius: 50%;
`;

export const GalleryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const GalleryImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
