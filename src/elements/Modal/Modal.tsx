import React, { useRef } from 'react';
import {
  Icon
} from '../Icon/Icon';

import { ModalStyles } from './Modal.Styles';

interface Props {
  opened?: boolean;
  closeModal?: () => void;
  className?: string;
  hasCloseBtn?: boolean
  children?: any;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const { opened, closeModal, hasCloseBtn, className, children } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const closeClickBackdrop = (e: any) => {
    e.stopPropagation();
    if (!closeModal) return false;
    if (e.target === modalRef.current) return closeModal();
  };

  const closeClick = (e: any) => {
    e.stopPropagation();
    if (!closeModal) return false;
    return closeModal();
  };

  if (!opened) {
    return null;
  }

  return (
    <ModalStyles
      ref={modalRef}
      className={className}
      onClick={closeClickBackdrop}
    >
      <div className={`modal__dialog ${opened ? 'active' : ''}`}>
        {
          hasCloseBtn && (
            <div className="modal__close-wrap">
              <button className="modal__close-btn" onClick={closeClick}>
                <Icon className="modal__close" name="close" size="12"/>
              </button>
            </div>
          )
        }
        {children}
      </div>
    </ModalStyles>
  );
};
