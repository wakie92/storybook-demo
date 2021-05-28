import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ButtonBlock,
  ModalBodyWrapper,
  ModalFooterWrapper,
  ModalHeaderWrapper,
  ModalWrapper,
} from './styled';

const BulldaxModalWindow = ({
  bodyContent,
  className,
  footerBtnContent,
  footerContent,
  headerContent,
  hideCloseBtn,
  isOpenDefault,
  onModalToggle,
  onModalClose,
  useDefaultFooterBtn,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpenDefault);
  const handleCloseModal = trigger => {
    setIsModalOpen(false);
    onModalClose(trigger);
  };

  const toggleModal = trigger => {
    if (isModalOpen) {
      handleCloseModal(trigger);
    }
    onModalToggle(!isModalOpen);
  };

  useEffect(() => {
    setIsModalOpen(isOpenDefault);
  }, [isOpenDefault]);

  return (
    <ModalWrapper isOpen={isModalOpen} toggle={() => toggleModal('wrapper')} className={className}>
      <ModalHeaderWrapper
        toggle={() => handleCloseModal('close')}
        className={`modal-header-block ${hideCloseBtn ? 'modal-header-no-close-btn' : ''}`}
      >
        {headerContent}
      </ModalHeaderWrapper>
      <ModalBodyWrapper className="modal-body-block">{bodyContent}</ModalBodyWrapper>
      {useDefaultFooterBtn ? (
        <ModalFooterWrapper className="modal-footer-block">
          <ButtonBlock>
            <Button onClick={() => handleCloseModal('button')} size="lg" theme="red">
              {footerBtnContent}
            </Button>
          </ButtonBlock>
        </ModalFooterWrapper>
      ) : footerContent ? (
        <ModalFooterWrapper className="modal-footer-block">{footerContent}</ModalFooterWrapper>
      ) : null}
    </ModalWrapper>
  );
};

BulldaxModalWindow.propTypes = {
  bodyContent: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node])
    .isRequired,
  className: PropTypes.string,
  footerContent: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  footerBtnContent: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  headerContent: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  hideCloseBtn: PropTypes.bool,
  isOpenDefault: PropTypes.bool,
  onModalToggle: PropTypes.func,
  onModalClose: PropTypes.func,
  useDefaultFooterBtn: PropTypes.bool,
};

BulldaxModalWindow.defaultProps = {
  className: null,
  footerContent: null,
  footerBtnContent: null,
  headerContent: null,
  hideCloseBtn: false,
  isOpenDefault: false,
  onModalToggle: () => {},
  onModalClose: () => {},
  useDefaultFooterBtn: true,
};

export default BulldaxModalWindow;
