import styled from "styled-components";

export const InventoryCardStyle: any = styled.div`
  display: flex;
  flex-direction: column;
  
  .inventoryCard {
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
        margin-top: 9.5vmin;
        width: 30vmin;
        height: 30vmin;
        border-radius: 2vmin;
        overflow: hidden;
      }
    }
    
    &-description {
      display: block;
      margin: 0 auto;
      margin-top: 3vmin;
      font-size: 2.65vmin;
      font-weight: 400;
      line-height: 3vmin;
      letter-spacing: -0.15000000596046448px;
      color: #FFFFFF;
      text-align: center;
    }
    
    &-profits {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 4vmin;
    }

    &-profit {
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 2.75vmin;
        font-weight: 400;
        line-height: 2.5vmin;
        letter-spacing: -0.15000000596046448px;
        color: #9747FF;
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

      &-energy {
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
    }
    
    &-error {
      display: block;
      margin: 0 auto;
      margin-top: 3vmin;
      font-size: 2.65vmin;
      font-weight: 400;
      line-height: 3vmin;
      letter-spacing: -0.15000000596046448px;
      color: #f44336;
      text-align: center;
    }
    
    &-actions {
      display: flex;
      margin-top: 3vmin;
    }

    &-btn {
      flex: 1;
      
      &.-icon {
        padding: 1.5vmin 3vmin;
      }
      
      &__title {
        font-size: 3.4vmin;
        font-weight: 500;
        line-height: 3.4vmin;
        letter-spacing: 0.3799999952316284px;
        text-align: center;

        color: #FFFFFF;
        margin-bottom: 1.25vmin;
      }

      &__value {
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
        margin-right: 2vmin;
        width: 4.5vmin;
        height: 4.5vmin;

        & svg {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
