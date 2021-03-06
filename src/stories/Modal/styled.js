import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

import OrgButton from '../BulldaxButton/BulldaxButton';

export const ModalButton = styled(OrgButton)`
  position: relative;
`;

export const ModalWrapper = styled(Modal)`
  max-width: ${({ isBigModal }) => isBigModal && '700px'};
`;

export const ModalHeaderWrapper = styled(ModalHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: ${({ hideCloseBtn }) => (hideCloseBtn ? 'none' : 'block')};
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
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

  > button {
    margin-right: 1rem;
  }
`;

export const Button = styled(OrgButton)`
  position: relative;
`;
