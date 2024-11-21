import styled from 'styled-components';

export const ModalStyles: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  z-index: 9999;

  .modal {
    &__dialog {
      position: relative;
      background: #1C1C1C;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.02);
      width: 100%;
      margin: 0 3vmin;
      border-radius: 3vmin;
      padding: 10vmin 7.5vmin;
      display: none;
      animation: fadeIn 0.5s cubic-bezier(0.65, 0, 0.35, 1);
      overflow: hidden;
      max-width: 722px;

      &.active {
        display: block;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
    
    &__close {
      width: 3vmin;
      height: 3vmin;
      
      &-wrap {
        display: block;
        position: absolute;
        top: -2vmin;
        right: 0;
        width: 6vmin;
        height: 6vmin;
        min-width: 6vmin;
        min-height: 6vmin;
        max-width: 6vmin;
        max-height: 6vmin;
      }
      &-btn {
        display: block;
        width: 6vmin;
        height: 6vmin;
        border: 0;
        box-shadow: none;
        border-radius: 50%;
        background: #8D8D8D;
        padding: 0;
        margin: 0;
      }
    }
  }

  &.modalImproveCard {
    .modal__dialog {
      padding: 5vmin 7.5vmin 7.5vmin;
    }
  }
  
  &.modalInventoryCard {
    .modal__dialog {
      padding: 2px;
      overflow: visible;
    }
    
    .modal-content {
      background: #171417;
      border-radius: 3vmin;
      padding: 5vmin 7.5vmin 7vmin;
    }
    
    &.-common {
      .modal__dialog {
        background: linear-gradient(180deg, #767676 0.66%, rgba(118, 118, 118, 0.1) 100%);
      }
    } 
  }

  &.modalPickUpDailyReward {
    .modal__dialog {
      padding: 14vmin 7.5vmin 8vmin;
    }
  }

  &.modalClue {
    .modal__dialog {
      overflow: visible;
      padding: 4.5vmin 14vmin 15vmin;
    }
  }
`;
