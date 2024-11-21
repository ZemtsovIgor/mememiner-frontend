import styled from "styled-components";

export const ClueStyle: any = styled.div`
  display: flex;
  flex-direction: column;

  .clue {
    &-title {
      display: block;
      font-size: 5.4vmin;
      font-weight: 500;
      line-height: 5.4vmin;
      letter-spacing: -0.30000001192092896px;
      color: #9747FF;
      text-align: center;
    }

    &-icon {
      display: block;
      margin: 0 auto;
      margin-top: 15vmin;
      width: 27vmin;
      height: 27vmin;

      & img {
        width: 100%;
        height: auto;
      }
    }

    &-text {
      display: block;
      margin: 0 auto;
      margin-top: 11vmin;
      font-size: 3.2vmin;
      font-weight: 400;
      line-height: 3.2vmin;
      letter-spacing: -0.15000000596046448px;
      color: #FFFFFF;
      text-align: center;
    }
  }
`;
