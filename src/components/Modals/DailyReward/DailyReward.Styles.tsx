import styled from "styled-components";

export const DailyRewardStyle: any = styled.div`
  display: flex;
  flex-direction: column;
  
  .dailyReward {
    &-img {
      width: 100%;
      height: auto;

      &__wrap {
        display: block;
        margin: 0 auto;
        margin-top: 0.4rem;
        margin-bottom: 0.5rem;
        width: 11vmin;
        height: 11vmin;
        overflow: hidden;
      }
    }
    
    &-title {
      display: block;
      font-size: 5vmin;
      font-weight: 500;
      line-height: 5vmin;
      color: #FFFFFF;
      text-align: center;
    }

    &-description {
      display: block;
      margin: 0 auto;
      margin-top: 3.5vmin;
      font-size: 2.68vmin;
      font-weight: 400;
      line-height: 2.8vmin;
      letter-spacing: -0.15000000596046448px;

      color: #FFFFFF;
      text-align: center;
    }
    
    &-rewards {
      display: flex;
      flex-wrap: wrap;
      margin-top: 7vmin;
      gap: 3.5vmin;
    }
    
    &-reward {
      position: relative;
      flex-grow: 1;
      width: calc((100% - 7vmin)/3);
      height: 24vmin;
      background: #252527;
      border: 0;
      border-radius: 3vmin;
      padding: 0.5vmin;

      &.-completed {
        pointer-events: none;
        background: linear-gradient(180deg, #43A047 0.66%, rgba(67, 160, 71, 0.1) 100%);
        
        &::before {
          content: '';
          position: absolute;
          right: -1.5vmin;
          top: -1.5vmin;
          width: 5vmin;
          height: 5vmin;
          background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE2QzEyLjQxODMgMTYgMTYgMTIuNDE4MyAxNiA4QzE2IDMuNTgxNzIgMTIuNDE4MyAwIDggMEMzLjU4MTcyIDAgMCAzLjU4MTcyIDAgOEMwIDEyLjQxODMgMy41ODE3MiAxNiA4IDE2WiIgZmlsbD0iIzQzQTA0NyIvPgo8cGF0aCBkPSJNMTEuMTg2IDQuNjAxNDJDMTEuNDk4MyA0Ljc5NjU2IDExLjU5MzIgNS4yMDc4NiAxMS4zOTggNS41MjAwOUw3LjY0ODAzIDExLjUyMDFDNy41MzQxNiAxMS43MDIzIDcuMzM5NDcgMTEuODE4NCA3LjEyNTA1IDExLjgzMjFDNi45MTA2MyAxMS44NDU3IDYuNzAyNzggMTEuNzU1MiA2LjU2NjczIDExLjU4ODlMNC4zMTY3MyA4LjgzODkxQzQuMDgzNTggOC41NTM5NSA0LjEyNTU4IDguMTMzOTQgNC40MTA1NCA3LjkwMDc4QzQuNjk1NTEgNy42Njc2MyA1LjExNTUyIDcuNzA5NjMgNS4zNDg2NyA3Ljk5NDZMNy4wMTAwNCAxMC4wMjUyTDEwLjI2NzQgNC44MTM0MkMxMC40NjI1IDQuNTAxMiAxMC44NzM4IDQuNDA2MjggMTEuMTg2IDQuNjAxNDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K) no-repeat;
        }
      }
      
      &.-active::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 18px;
        height: 17px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxOCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMEMxNC40MTgzIDAgMTggMy41ODE3MiAxOCA4VjE3TDAgMFoiIGZpbGw9IiNGMjlDMDciLz4KPC9zdmc+Cg==) no-repeat;
        transition: transform 0.3s ease-in-out 0s;
      }
      
      &__wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #252527;
        height: 100%;
        border-radius: 3vmin;
      }
      
      &__title {
        font-size: 3vmin;
        font-weight: 400;
        line-height: 3vmin;
        letter-spacing: -0.25px;
        color: #FFFFFF;
      }
      
      &__reward {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      &__img {
        width: 7vmin;
        height: 7vmin;
        margin-top: 1vmin;
      }
      
      &__amount {
        margin-top: 1.8vmin;
        font-size: 3vmin;
        font-weight: 600;
        line-height: 3vmin;
        letter-spacing: -0.30000001192092896px;
      }
      
      &.-big {
        .dailyReward-reward__img {
          width: 15vmin;
          height: 15vmin;
          margin-top: 0;
          margin-left: 8.5vmin;
        }
      }
      
      &:hover {
        opacity: 1;
      }
    }
  }
`;
