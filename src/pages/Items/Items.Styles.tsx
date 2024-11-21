import styled from 'styled-components';

export const ItemsContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 4.5vmin;
`;
export const ItemsControl: any = styled.div`
  margin-top: 3vmin;
  .items {
    &-control {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 10vmin;
      width: 100%;
      background: #171417;
      border-radius: 2vmin;


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
        padding: 10px 0;
        background: transparent;
        border: 0;
        box-shadow: none;

        &.-active {
          color: var(--accent-green);
        }
      }
      
      &__select {
        flex: 1;
      }
      
      &__icon {
        fill: #ffffff;
      } 
    }
  }
`;

export const ItemsWrap: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-top: 3.5vmin;
  margin-bottom: 2.5vmin;
  overflow: hidden;
  
  .items {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5vmin;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
    }
  }
  
  .item {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    width: calc((100vw - 20.5vmin) / 4);
    height: calc((100vw + 1vmin) / 4);
    border-radius: 3vmin;
    background: #171417;
    padding: 0.5vmin;
    
    &.-pointed {
      cursor: pointer;
    }
    
    &.-overprice {
      //pointer-events: none;
      //opacity: 0.5;
    }
    
    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #171417;
      border-radius: 3vmin;
      width: 100%;
      height: calc((100vw - 20.5vmin) / 4);
      margin-bottom: auto;
    }
    
    &.-common {
      background: linear-gradient(180deg, #767676 0%, rgba(118, 118, 118, 0.36) 100%);
    }

    &.-uncommon {
      background: linear-gradient(180deg, #70B558 0%, rgba(112, 181, 88, 0.36) 100%);
    }

    &.-rare {
      background: linear-gradient(180deg, #419ADB 0%, rgba(65, 154, 219, 0.36) 100%);
    }

    &.-epic {
      background: linear-gradient(180deg, #9747FF 0%, rgba(151, 71, 255, 0.36) 100%);
    }

    &.-legendary {
      background: linear-gradient(180deg, #FBCE2F 0%, rgba(251, 206, 47, 0.36) 100%);
    }

    &.-mythic {
      background: linear-gradient(180deg, #B93633 0%, rgba(185, 54, 51, 0.36) 100%);
    }

    &.-hidden {
      display: none;
    }

    &.-selected {
      &::before {
        content: "";
        position: absolute;
        top: 3px;
        right: 4px;
        width: 18px;
        height: 17px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxOCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMEMxNC40MTgzIDAgMTggMy41ODE3MiAxOCA4VjE3TDAgMFoiIGZpbGw9IiNGMjlDMDciLz4KPC9zdmc+Cg==) no-repeat;
        transition: transform 0.3s ease-in-out 0s;
      }
    }

    &-price {
      font-size: 3.5vmin;
      font-weight: 400;
      line-height: 3.5vmin;
      margin-top: 1.5vmin;
      margin-bottom: 0.5vmin;
      letter-spacing: -0.15000000596046448px;
      color: #FFFFFF;

      &__wrap {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const ItemImg: any = styled.div<{ icon?: string; }>`
  height: 100%;
  width: 100%;
  background: url(data:image/svg+xml;base64,${props => props.icon ? props.icon : ''});
  background-repeat: no-repeat;
  background-size: contain;
`;
