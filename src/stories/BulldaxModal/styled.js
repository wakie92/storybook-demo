import styled from 'styled-components';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import OrgButton from '../BulldaxButton/BulldaxButton';

export const ModalWrapper = styled(Modal)`
  width: 420px;

  .modal-content {
    margin-top: 5rem;
    background-color: ${({ theme }) => theme.colors.text.input};
    box-shadow: 0 8px 10px rgba(112, 112, 112, 0.3);
    border-radius: 4px;
  }

  .modal-footer {
    padding: 1rem;
  }

  @media screen and (max-width: 560px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 440px) {
    width: 96%;
  }
`;

export const ModalHeaderWrapper = styled(ModalHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;

  > button {
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }

  .modal-header-no-close-btn button {
    display: none;
  }
`;

export const ModalBodyWrapper = styled(ModalBody)`
  border: none;
`;

export const ModalFooterWrapper = styled(ModalFooter)`
  border: none;
`;

export const ButtonBlock = styled.div`
  width: 100%;
`;

export const Button = styled(OrgButton)`
  position: relative;
`;
