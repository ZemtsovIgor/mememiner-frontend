import styled from 'styled-components';

export const HeaderContainer: any = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4vmin 4.5vmin 1vmin 4.5vmin;
  
  .header {
    &-left {}
    &-right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30vmin;
      height: 8.5vmin;
      background-color: #171417;
      border-radius: 5vmin;
    }
  }
  
  .user-info {
    align-items: center;
    display: inline-flex;
    flex: 1 1 auto;
    justify-content: center;
    
    &__avatar {
      background-color: #1c1f24;
      flex: 0 0 8.5vmin;
      height: 8.5vmin;
      margin-right: 3.5vmin;
      overflow: hidden;
      width: 8.5vmin;
      border-radius: 1vmin;
      
      &_img {
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
      }
    }
    
    &__name {
      color: #ffffff;
      cursor: default;
      font-size: 3.5vmin;
      letter-spacing: -0.30000001192092896px;
      font-weight: 500;
      line-height: 3.5vmin;
    }
  }
`;
