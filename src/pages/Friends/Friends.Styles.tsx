import styled from 'styled-components';

export const FriendsWrap: any = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  
  .friends {
    &-wrapper {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      padding: 3vmin 4.5vmin 0;
    }

    &-title {
      font-size: 6.4vmin;
      font-weight: 500;
      line-height: 6.4vmin;
      letter-spacing: -0.30000001192092896px;
      color: #FFFFFF;

      &__wrap {
        text-align: center;
      }
    }

    &-description {
      font-size: 3.2vmin;
      font-weight: 500;
      line-height: 4vmin;
      letter-spacing: -0.30000001192092896px;
      margin-top: 2.5vmin;
      color: #FFFFFF;
      
      &__wrap {
        text-align: center;
        max-width: 85%;
        margin: 0 auto;
      }
    }

    &-info {
      display: flex;
      flex-direction: row;
      gap: 4vmin;
      
      &__btn {
        display: flex;
        flex: 1;
        flex-direction: column;
        background: #9747FF;
        border-radius: 2vmin;
        text-align: center;
        padding: 2vmin 0;

        &_title {
          font-size: 3.4vmin;
          font-weight: 500;
          line-height: 3.4vmin;
          letter-spacing: 0.3799999952316284px;
          text-align: center;

          color: #FFFFFF;
          margin-bottom: 1.25vmin;
        }

        &_value {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          font-size: 3.6vmin;
          font-weight: 500;
          line-height: 3.6vmin;
          letter-spacing: 0.3799999952316284px;
          color: #FFFFFF;
        }

        &__icon {
          margin-right: 1vmin;
          width: 7vmin;
          height: 7vmin;

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      margin-top: 1.5vmin;
      margin-bottom: 2.5vmin;
      overflow: hidden;
      
      &__description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1vmin;
        
        &_title {
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: -0.30000001192092896px;
          color: #FFFFFF;
        }
        
        &_side {
          display: flex;
          align-items: center;
        }

        &_text {
          font-size: 11px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: -0.15000000596046448px;
          color: #FFFFFF;
        }
        
        &_icon {
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
      
      &__wrap {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
        overflow-y: scroll;
        gap: 1.2vmin;
        height: 86vmin;
      }
    }

    &-friend {
      display: flex;
      height: 20.6vmin;
      padding: 1.5vmin;
      background: #171417;
      border-radius: 1.5vmin;

      &__avatar {
        width: 17.6vmin;
        height: 17.6vmin;
        background: rgba(60, 60, 67, 0.29);
        border-radius: 1vmin;
        overflow: hidden;

        &_img {
          width: 100%;
          height: auto;
        }
      }

      &__rows {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        padding: 3vmin 2.5vmin;
        
        &_side {
          display: flex;
          flex-direction: column;
        }
      }

      &__title {
        font-size: 3.75vmin;
        font-weight: 500;
        line-height: 3.75vmin;
        letter-spacing: -0.30000001192092896px;
        color: #FFFFFF;
      }

      &__info {
        display: flex;
        align-items: center;
        margin-top: 1vmin;
      }

      &__role {
        font-size: 3vmin;
        font-weight: 400;
        line-height: 3vmin;
        letter-spacing: -0.25px;
        color: #8E8E93;

        &_wrap {
          display: flex;
          align-items: center;
          width: 15.7vmin;
        }
      }

      &__balance {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: -0.30000001192092896px;
        color: #FFFFFF;
        
        &_icon {
          margin-right: 1.25vmin;
          width: 4.25vmin;
          height: 4.25vmin;

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }

      &__profit {
        display: flex;
        flex-direction: column;
        margin-top: 2vmin;

        &_title {
          font-size: 3vmin;
          font-weight: 400;
          line-height: 3vmin;
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
    
    &-actions {
      display: flex;
      gap: 5vmin;
      margin-bottom: 4vmin;
      
      &__btn {
        flex: 8;
        text-decoration: none;
        
        &.-copy {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 3vmin 3vmin 2vmin;
        }
        
        &_icon {
          display: flex;
          width: 6.25vmin;
          height: 8vmin;

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
`;
