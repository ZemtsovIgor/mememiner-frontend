import styled from 'styled-components';

export const LoadingStyles: any = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-image: url("/img/splash.png");
  //background-position: center;
  //background-size: cover;

  .image {
    text-align: center;
    
    svg {
      width: 100vw;
      height: auto;
      animation: rotate 1s linear infinite;
    }    
  }
  
  .state {
    display: block;
    color: #ffffff;
  }
`;
