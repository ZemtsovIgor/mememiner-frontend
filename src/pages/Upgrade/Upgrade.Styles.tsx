import styled from 'styled-components';

export const Counters: any = styled.div`
  padding: 2vmin 4.5vmin 0;

  .counters {
    &-wrapper {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 2vmin;
    }
    
    &-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      background: #171417;
      border-radius: 1vmin;
      text-align: center;
      padding: 3vmin 0;
      position: relative;

      &__name {
        display: inline-block;
        font-size: 3vmin;
        font-weight: 400;
        line-height: 3vmin;
        letter-spacing: -0.15000000596046448px;
        color: #FD9103;

        &.-purple {
          color: #9747FF;
        }

        &.-green {
          color: #53ED0A;

        }
      }

      &__value {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1vmin;

        &_text {
          font-size: 3vmin;
          font-weight: 600;
          line-height: 3vmin;
          letter-spacing: -0.30000001192092896px;
          color: #ffffff;
        }
        
        &.-text {
          margin-top: 2vmin;

          .counters-item__value_text {
            font-size: 3.25vmin;
            line-height: 3.25vmin;
          }
        }
      }

      &__icon {
        margin-right: 1vmin;
        width: 4.25vmin;
        height: 4.25vmin;

        & svg {
          width: 100%;
          height: auto;
        }
      }

      &__info {
        display: flex;
        margin-left: 2vmin;
        width: 3.25vmin;
        height: 3.25vmin;

        & svg {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
export const Balance: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4.5vmin 0 0;
  padding: 0 4.5vmin;
  
  
  .balance {
    &-icon {
      width: 13vmin;
      height: 13vmin;
      
      & svg {
        width: 100%;
        height: auto;
      }
    }
    &-text {
      margin-left: 2vmin;
      font-size: 8vmin;
      font-weight: 800;
      line-height: 8vmin;
      letter-spacing: -0.30000001192092896px;
      color: #ffffff;
    }
  }
`;

export const CardTypesControl: any = styled.div`
  padding: 2vmin 4.5vmin 0;
  
  .cards {
    &-control {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 10vmin;
      gap: 11px;
      background: #171417;
      padding: 1vmin;

      &__types {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex: 2;
        gap: 11px;
        overflow: hidden;
        overflow-x: scroll;
      }

      &__btn {
        flex: 1;
        padding: 10px 0;
        background: transparent;
        border: 0;
        box-shadow: none;
        font-size: 2.65vmin;
        font-weight: 500;
        line-height: 2.65vmin;
        letter-spacing: -0.30000001192092896px;
        color: #707579;
        border-radius: 1vmin;


        &.-active {
          background: #9747FF;
          color: #FFFFFF;
        }
      }
    }
  }
`;

export const CardsWrap: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3vmin;
  padding: 4.5vmin 4.5vmin 0;
  
  .card {
    display: flex;
    flex: 0 calc(50% - 3.5vmin);
    flex-direction: column;
    background: #322F34;
    border-radius: 1vmin;
    padding: 1vmin;

    &-info {
      display: flex;
      flex-direction: row;
      
      &__avatar {
        flex: 1;
        overflow: hidden;
        border-radius: 0.5vmin;
        
        &_img {
          width: 100%;
          height: auto;
        }
      }
      
      &__rows {
        display: flex;
        flex-direction: column;
        flex: 1;
        text-align: center;
        padding: 1vmin;
      }
      
      &__title {
        font-size: 3.7vmin;
        font-weight: 500;
        line-height: 3.7vmin;
        letter-spacing: -0.30000001192092896px;
        color: #FFFFFF;
      }

      &__level {
        margin-top: 1.25vmin;
        font-weight: 400;
        font-size: 2.9vmin;
        line-height: 2.9vmin;
        letter-spacing: -0.25px;
        color: #9747FF;
      }
      
      &__profit {
        display: flex;
        flex-direction: column;
        margin-top: 2vmin;
        
        &_title {
          font-size: 2.7vmin;
          font-weight: 400;
          line-height: 2.7vmin;
          letter-spacing: -0.15000000596046448px;
          color: #FFFFFF;
        }
        
        &_value {
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

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.1vmin;
      font-size: 3.25vmin;
      font-weight: 600;
      line-height: 3.25vmin;
      letter-spacing: -0.30000001192092896px;
      color: #FFFFFF;
      background: #171417;
      border-radius: 1vmin;
      padding: 1.5vmin 0px;

      &__icon {
        margin-right: 2vmin;
        width: 4.25vmin;
        height: 4.25vmin;

        & svg {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
