import styled from 'styled-components';

export const TasksWrap: any = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  //flex: 1 1 auto;
  
  .tasks {
    &-wrapper {
      display: flex;
      flex-direction: column;
      //flex: 1 1 auto;
      height: 100%;
      padding: 0 4.5vmin;
    }

    &-title {
      font-size: 6.4vmin;
      font-weight: 500;
      line-height: 6.4vmin;
      letter-spacing: -0.30000001192092896px;
      color: #FFFFFF;

      &__wrap {
        text-align: center;
        margin-top: 3vmin;
      }
    }

    &-info {
      display: flex;
      flex-direction: row;
      gap: 4vmin;
      margin-top: 8.5vmin;

      &__btn {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: #9747FF;
        border-radius: 3vmin;
        text-align: center;
        padding: 2vmin 0;

        &_icon {
          margin-right: 4vmin;
          width: 11vmin;
          height: 11vmin;

          &_img {
            width: 100%;
            height: auto;
          }
        }

        &_title {
          font-size: 5vmin;
          font-weight: 500;
          line-height: 5vmin;
          letter-spacing: 0.02vmin;
          text-align: center;
          color: #FFFFFF;
        }
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      margin-top: 11.8vmin;
      margin-bottom: 2.5vmin;
      overflow: hidden;

      &__description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2vmin;

        &_title {
          font-size: 3.8vmin;
          font-weight: 400;
          line-height: 3.8vmin;
          letter-spacing: -0.30000001192092896px;
          color: #FFFFFF;
        }
      }

      &__wrap {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
        overflow-y: scroll;
        gap: 0.5vmin;
      }
    }
  }

  .task {
    display: flex;
    height: 20.1vmin;
    padding: 1.5vmin;
    background: #171417;
    border-radius: 1.5vmin;
    border: 0;
    box-shadow: none;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 17.6vmin;
      height: 17.6vmin;
      overflow: hidden;

      &__img {
      }
    }

    &-rows {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 4vmin 2.5vmin;
      
      &__side {
        display: flex;
        flex-direction: column;
      }
    }

    &-title {
      font-size: 3.36vmin;
      font-weight: 500;
      line-height: 3.36vmin;
      letter-spacing: -0.30000001192092896px;
      text-align: left;
      color: #FFFFFF;
    }

    &-reward {
      display: flex;
      align-items: center;
      font-size: 3.25vmin;
      font-weight: 600;
      line-height: 3.25vmin;
      letter-spacing: -0.30000001192092896px;
      margin-top: 2vmin;
      color: #FFFFFF;
      
      &__icon {
        margin-right: 2vmin;
        width: 4.25vmin;
        height: 4.25vmin;

        &_img {
          width: 100%;
          height: auto;
        }
      }
    }
    
    &-completed {
      &__img {
        
      }
    }
  }
`;
