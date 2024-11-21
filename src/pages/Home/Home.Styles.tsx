import styled from 'styled-components';

export const HomeContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Counters: any = styled.div`
  padding: 0 4.5vmin;
  margin-top: 2vmin;
  margin-bottom: 2vmin;
  
  .counters {
    &-wrapper {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 2vmin;
    }

    &-bg {
      flex: 1;
      background: linear-gradient(180deg, #9747FF 0%, rgba(151, 71, 255, 0.1) 100%);
      padding: 2px;
      border-radius: 4vmin;
    }

    &-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      padding: 1.75vmin 0;
      padding-bottom: 1.5vmin;
      position: relative;
      
      &.-small {
        flex: 0.65;
      }
      
      &.-big {
        flex: 1.3;
      }

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
        justify-content: space-between;
        margin-top: 0.5vmin;
        
        &_text {
          font-size: 3vmin;
          font-weight: 600;
          line-height: 3vmin;
          letter-spacing: -0.30000001192092896px;
          color: #ffffff;
          margin-right: auto;
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

      &__img {
        width: 100%;
        height: auto;

        &_wrap {
          margin-right: 1vmin;
          width: 4.25vmin;
          height: 4.25vmin;
        }
      }
      
      &__info {
        display: block;
      }
    }
  }
`;

export const ProgressLine: any = styled.div<{ progress?: number; pointslength?: number; }>`
  flex: 3;
  display: flex;
  margin-top: -3px;
  
  .progressLine {
    &-container {
      flex: 5;
      display: flex;
      flex-direction: column;
      padding-right: 1.5vmin;
    }

    &-annotation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__name {
        font-size: 3vmin;
        font-weight: 500;
        line-height: 3vmin;
        letter-spacing: -0.30000001192092896px;
        color: #fff;
        
        &.-gray {
          color: #707579;
          margin-left: auto;
          margin-right: 1vmin;
          font-size: 3vmin;
        }
      }
    }
    
    &-wrap {
      position: relative;
      width: 100%;
      height: 3.5vmin;
      border-radius: 4vmin;
      border: 1px solid #455154;
      background: #272A2F;
      margin: 0 auto;
      overflow: hidden;
      margin-top: 1vmin;
    }

    &-line {
      height: 100%;
      width: ${props => props.progress ? props.progress : 0}%;
      border-radius: 4vmin;
      background: #9747FF;
      box-shadow: 0 0 6px #000;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    
    &-caption {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      text-align: center;
      color: #ffffff;
      font-size: 2.7vmin;
      font-weight: 500;
      line-height: 2.7vmin;
      letter-spacing: -0.30000001192092896px;
      
      &__icon {
        margin-right: 6px;
        width: 2.5vmin;
        height: 2.5vmin;
        
        & svg {
          width: 100%;
          height: auto;
        }
      }

      &__img {
        width: 100%;
        height: auto;

        &_wrap {
          width: 3vmin;
          height: 3vmin;
        }
      }
      
      &__text {
        display: block;
        width: ${props => props.pointslength ? props.pointslength * 2 : 0}vmin;
      }
    }
  }
`;

export const Balance: any = styled.div<{ balancelength?: number; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5vmin 0 0;
  padding: 0 4.5vmin;
  
  
  .balance {
    &-icon {
      width: 13.5vmin;
      height: 13.5vmin;
      
      & svg {
        width: 100%;
        height: auto;
      }
    }
    &-img {
      width: 100%;
      height: auto;

      &__wrap {
        width: 14vmin;
        height: 14vmin;
      }
    }
    &-text {
      margin-left: 2vmin;
      font-size: 8vmin;
      font-weight: 800;
      line-height: 8vmin;
      letter-spacing: -0.30000001192092896px;
      color: #ffffff;
      width: ${props => props.balancelength ? props.balancelength * 7 : 0}vmin;
    }
  }
`;

export const BottomContent: any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15vmin;
  //flex-grow: 1;
  padding: 2.5vmin 4.5vmin 0 12.5vmin;
  //margin-bottom: -2vmin;
`;

export const Energy: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22vmin;
  
  .energy {
    &-count {
      display: flex;
      align-items: center;
      justify-content: center;
      
      &__icon {
        width: 4vmin;
        height: 7vmin;
        margin-left: 1vmin;
        margin-right: 1vmin;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNSA3LjdWMUM2LjUgMC43NjUyOTkgNi4zMzY3NiAwLjU2MjE4NyA2LjEwNzU1IDAuNTExNzA0QzUuODc4MzQgMC40NjEyMiA1LjY0NDg3IDAuNTc2OTU1IDUuNTQ2MjcgMC43ODk5MzhMMC41NDYyNjcgMTEuNTg5OUMwLjQ3NDU4NiAxMS43NDQ4IDAuNDg2ODA0IDExLjkyNTUgMC41Nzg2NzQgMTIuMDY5MkMwLjY3MDU0NCAxMi4yMTMgMC44MjkzODMgMTIuMyAxIDEyLjNINS41VjE5QzUuNSAxOS4yMzQ3IDUuNjYzMjQgMTkuNDM3OCA1Ljg5MjQ1IDE5LjQ4ODNDNi4xMjE2NiAxOS41Mzg4IDYuMzU1MTMgMTkuNDIzIDYuNDUzNzMgMTkuMjEwMUwxMS40NTM3IDguNDEwMDZDMTEuNTI1NCA4LjI1NTIzIDExLjUxMzIgOC4wNzQ1NCAxMS40MjEzIDcuOTMwNzdDMTEuMzI5NSA3Ljc4NyAxMS4xNzA2IDcuNyAxMSA3LjdINi41WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfNzkpIiBzdHJva2U9IiNGRDkwMDMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzc5IiB4MT0iNiIgeTE9IjEiIHgyPSI2IiB5Mj0iMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZERjY0NSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRUMzMDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K);
        background-repeat: no-repeat;
        background-size: contain;
      }

      &__text {
        font-size: 3vmin;
        font-weight: 500;
        line-height: 3vmin;
        letter-spacing: -0.30000001192092896px;
        color: #ffffff;
      }
    }
  }
`;

export const Lootbox: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-left: -7vmin;
  cursor: pointer;
  
  .lootbox {
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    &-icon {
      width: 14vmin;
      height: 10vmin;
      background: url(data:image/png;base64,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);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

export const MultiTap: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  
  .multitap {
    background: #171417;
    border-radius: 1vmin;
    text-align: center;
    padding: 0.5vmin 0;
    padding-bottom: 1.5vmin;
    position: relative;

    &-icon {
      margin-right: 1vmin;
      width: 2.75vmin;
      height: auto;
      
      &__wrap {
        margin-right: 1.25vmin;
      }
    }

    &-value {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: auto;

      &__text {
        font-size: 3vmin;
        font-weight: 600;
        line-height: 3vmin;
        letter-spacing: -0.30000001192092896px;
        color: #ffffff;
      }

      &__icon {
        margin-right: 1vmin;
        width: 5vmin;
        height: 5vmin;

        & svg {
          width: 100%;
          height: auto;
        }
      }

      &__img {
        width: 100%;
        height: auto;

        &_wrap {
          margin-right: 1vmin;
          width: 4vmin;
          height: 4vmin;
        }
      }
    }
  }
`;

export const CenteredContent: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const Maintanence: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  span {
    color: #fff;
  };
`;
