import styled from "styled-components";

export const PickUpCoinsStyle: any = styled.div`
  display: flex;
  flex-direction: column;
  
  .pickUpCoins {
    &-title {
      display: block;
      font-size: 6.4vmin;
      font-weight: 600;
      line-height: 6.4vmin;
      letter-spacing: -0.25px;
      color: #FFFFFF;
      text-align: center;
    }
    
    &-icon {
      display: block;
      margin: 0 auto;
      margin-top: 15vmin;
      width: 32vmin;
      height: 32vmin;
      
      & img {
        width: 100%;
        height: auto;
      }
    }
    
    &-amount {
      display: block;
      margin-top: 4.5vmin;
      font-size: 9.5vmin;
      font-weight: 800;
      line-height: 9.5vmin;
      letter-spacing: -0.3px;
      color: #FFFFFF;
      text-align: center;
    }
    
    &-actions {
      display: flex;
      margin-top: 29vmin;
    }

    &-btn {
      flex: 1;
    }
  }
`;
