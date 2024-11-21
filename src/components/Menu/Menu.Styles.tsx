import styled from 'styled-components';

export const MenuContainer: any = styled.div`
  //display: flex;
  //position: sticky;
  //bottom: 0;
  //margin-top: auto;
  padding: 0 4.5vmin 2vmin;
  margin-bottom: 2vmin;
  height: 14vmin;
  
  .menu {
    &-list {
      height: 12vmin;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 1.5vmin;
      background: #272A2F;
      border-radius: 4vmin;

      &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-decoration: none;
        border-radius: 4vmin;
        
        &:hover {
          opacity: 0.8;
        }
      }

      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        fill: #707579;
        
        width: 10vmin;
        height: 10vmin;
        
        svg {
          max-width: 100%;
          max-height: 100%;
          min-width: 6vmin;
          min-height: 6vmin;
        }
      }

      &__item {
        flex: 1;
        height: 100%;
        text-align: center;
        overflow: hidden;
        list-style:none;
        
        
        &.-active {
          & .menu-list {
            &__link {
              background: #1C1F24;
              &:hover {
                opacity: 1;
              }
            }

            &__icon {
              fill: #9747FF;
            }
          }
        }
      }
    }
  }
`;
