import styled from 'styled-components';

export const ItemsControl: any = styled.div`
  border-bottom: #000;
  .items {
    &-control {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 12vmin;
      width: 100%;

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
  .items {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 1vmin;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
    }
  }
  
  .item {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 22vmin;
    height: 22vmin;
    border-radius: 3vmin;
    background: #171417;
    
    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #171417;
      border-radius: 3vmin;
      width: 21vmin;
      height: 21vmin;
    }
    
    &.-common {
      background: linear-gradient(180deg, #767676 0.66%, rgba(118, 118, 118, 0.1) 100%);
    }

    &.-uncommon {
      background: linear-gradient(180deg, #70B558 0.66%, rgba(112, 181, 88, 0.1) 100%);
    }

    &.-rare {
      background: linear-gradient(180deg, #419ADB 0%, rgba(65, 154, 219, 0.1) 100%);
    }

    &.-epic {
      background: linear-gradient(180deg, #9747FF 0%, rgba(151, 71, 255, 0.1) 100%);
    }

    &.-legendary {
      background: linear-gradient(180deg, #FBCE2F 0%, rgba(251, 206, 47, 0.1) 100%);
    }

    &.-mythic {
      background: linear-gradient(180deg, #B93633 0%, rgba(185, 54, 51, 0.1) 100%);
    }

    &.-hidden {
      display: none;
    }

    &.-selected {
      &::before {
        content: "";
        position: absolute;
        top: 13px;
        right: 14px;
        width: 16px;
        height: 12px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjMgMUw1LjQ5OTY3IDEwLjE2NjdMMS4zMzMwMSA2IiBzdHJva2U9IiMxNWZmMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=) no-repeat;
        transition: transform 0.3s ease-in-out 0s;
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
