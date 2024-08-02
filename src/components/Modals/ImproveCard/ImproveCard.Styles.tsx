import styled from "styled-components";

export const ImproveCardStyle: any = styled.div`
  display: flex;
  flex-direction: column;
  
  .improveCard {
    &-title {
      display: block;
      font-size: 5.3vmin;
      font-weight: 600;
      line-height: 5.3vmin;
      letter-spacing: -0.30000001192092896px;
      color: #FFFFFF;
      text-align: center;
    }
    
    &-img {
      width: 100%;
      height: auto;
      
      &__wrap {
        display: block;
        margin: 0 auto;
        margin-top: 4.5vmin;
        width: 33vmin;
        height: 33vmin;
        border-radius: 2vmin;
        overflow: hidden;
      }
    }
    
    &-description {
      display: block;
      margin: 0 auto;
      max-width: 60%;
      margin-top: 3vmin;
      font-size: 2.65vmin;
      font-weight: 400;
      line-height: 3vmin;
      letter-spacing: -0.15000000596046448px;
      color: #FFFFFF;
      text-align: center;
    }

    &-profit {
      display: flex;
      flex-direction: column;
      margin-top: 3vmin;

      &__title {
        font-size: 2.7vmin;
        font-weight: 400;
        line-height: 2.7vmin;
        letter-spacing: -0.15000000596046448px;
        color: #FFFFFF;
        text-align: center;
      }

      &__value {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 0.75vmin;
        font-size: 3vmin;
        font-weight: 600;
        line-height: 3vmin;
        letter-spacing: -0.30000001192092896px;
        color: #FFFFFF;
      }

      &__icon {
        margin-right: 1vmin;
        width: 4.25vmin;
        height: 4.25vmin;

        & img {
          width: 100%;
          height: auto;
        }
      }
    }
    
    &-actions {
      display: flex;
      margin-top: 4vmin;
    }

    &-btn {
      flex: 1;
    }
  }
`;
