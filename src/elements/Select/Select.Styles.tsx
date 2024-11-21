import { Select, MenuItem } from '@mui/material';
import styled from 'styled-components';

export const SelectContainer: any = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  height: 100%;
  width: 100%;

  &.-error {
    input {
      box-shadow: 4px 4px 40px rgba(176, 22, 22, 0.07);
    }

    p {
      animation: fadeIn 0.8s;
      display: block;
      color: #FF0000;
    }
  }
  
  .select {
    &-img {
      width: 8vmin;
      height: 8vmin;
      margin: 0.5vmin 5vmin 0.5vmin 0;
    }
    
    &-wrap {
      display: flex;
      width: 100%;
    }

    &-native {
      &__wrap {
        display: flex;
        width: 100%;
      }
      &__img {
        width: 8vmin;
        height: 8vmin;
        border-radius: 50%;
        margin-right: 5vmin;
      }
    }
  }
`;

export const SelectLabel: any = styled.label`
  display: block;
  position: absolute;
  font-weight: 400;
  font-size: 4vmin;
  line-height: 4vmin;
  color: var(--tg-theme-text-color);
`;

export const SelectInput: any = styled.label`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
`;

export const SelectElement: any = styled(Select)`
  &.MuiInputBase-root {
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transition: box-shadow 0.3s ease-in-out;


    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
    
    .MuiSelect-select {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: 10vmin;
      padding: 0;
      padding-right: 0!important;
    }

    &.-image {
      .MuiSelect-select {
        font-weight: 400;
        font-size: 3.5vmin;
        line-height: 3vmin;
        padding-top: 6vmin;
        color: var(--tg-theme-hint-color);
      }

      .MuiSelect-select {
        min-height: auto;
      }
    }
    
    &.Mui-focused {
      box-shadow: none;
    }
    
    &.Mui-disabled {
      background: #F9FAFB;
      color: #667085;
    }

    &.status {

      .MuiMenu-list {
        padding: 0;
      }
    }

    .MuiNativeSelect {
      &-select {
        font-weight: 400;
        font-size: 4vmin;
        line-height: 6vmin;
        padding: 0;
        padding-right: 0!important;
      }
      
      &-icon {
        right: 0;
      }
    }
  }

  .MuiSelect-icon {
    fill: #ffffff;
  }

  .MuiSelect-selectMenu {
    padding: 12px 40px 12px 30px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #eaeaea;
    background: #eaeaea;
    box-shadow: #eaeaea;
  }

  .MuiMenu-paper {
    background: #171417;
    box-shadow: 0 0 1px rgba(12, 26, 75, 0.1), 0 10px 16px rgba(20, 37, 63, 0.06);
    margin-top: 0;
    width: calc(100% - 8vmin);
    max-height: 74vmin;
  }

  .MuiMenu-list {
    padding: 2vmin 0;
  }

  .MuiMenuItem-root {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #ffffff;
    padding: 0;
    margin: 2vmin 0;
    min-height: auto;

    &.Mui-selected {
      background: transparent;

      &:hover {
        background: transparent;
      }
    }
  }

  .MuiListItem-button {
    border-radius: 8px;
    padding: 10px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.06) 71.01%,
        rgba(255, 255, 255, 0) 99.52%
      );
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    &:hover,
    &:focus {
      background-color: transparent;
      background-image: linear-gradient(
        90deg,
        rgba(232, 232, 232, 0.12) 0%,
        rgba(196, 196, 196, 0) 78.12%
      );
    }

    &.Mui-selected {
      background-color: transparent;
    }
  }

  .MuiListItem-root.Mui-selected,
  .MuiListItem-root.Mui-selected:hover {
    background-color: transparent;
  }

  &.dropdown-menu {
    background-color: transparent;
    border-radius: 5px;
    width: auto;
    margin-bottom: 0;

    .MuiSelect-select {
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: var(--white);
      background-color: transparent;
    }

    .MuiSelect-selectMenu {
      height: auto;
      border-radius: 0;
    }

    .MuiMenu-paper {
      border-radius: var(--border-radius);
      box-shadow: 0 0 11px rgba(0, 0, 0, 0.04);
    }

    .MuiList-root {
      background: linear-gradient(
        to top,
        rgba(147, 90, 237, 0.21) 0.14%,
        rgba(41, 47, 57, 0) 99.86%
      );
      border-radius: 13px;
    }

    .MuiList-padding {
      padding: 11px 8px;
    }

    .MuiListItem-button {
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: var(--white);
      border-radius: 8px;

      a {
        color: var(--white);
      }

      &::after {
        display: none;
      }

      &:focus,
      &:hover {
        background-color: transparent;
        text-decoration: underline;
      }

      &.Mui-selected {
        background-color: transparent;
        text-decoration: underline;
      }
    }

    .MuiMenuItem-root {
      min-height: auto;
    }

    &.-disable-rotate {
      &.Mui-focused {
        box-shadow: none;
      }
      & .MuiSelect-iconOpen {
        transform: none;
      }
    }
  }

  &.social-dropdown {
    .MuiSelect-selectMenu {
      padding: 0;
    }

    .MuiSelect-icon {
      top: auto;
      right: auto;
    }
  }
`;

export const SelectListItem: any = styled(MenuItem)`
  svg {
    stroke: #667085;
  }
  
  .select {
    &-option {
      display: flex;
      column-gap: 1vmin;
      
      &__text {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2vmin;
        width: 47vmin;
        background: #272A2F;
        font-size: 4vmin;
        font-weight: 400;
        line-height: 8.5vmin;
        letter-spacing: -0.1vmin;
        color: #ffffff;
        outline: none;
        border: 0;
      }
      
      &__btn {
        
      }

      &.-active {
        & .select-option {
          &__text {
            background: #9747FF;
          }
        }
      }
    }
  }
`;
export const Placeholder: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5vmin;
  font-weight: 500;
  line-height: 5vmin;
  letter-spacing: 0.25vmin;
  text-align: center;
  color: #ffffff;
  
  svg {
    margin-left: 2.5vmin;
  }
`;

export const FormControlInputError: any = styled.p`
  margin: 8px 0;
  color: var(--red);
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  display: none;
  white-space: pre-line;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;
