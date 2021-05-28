import { Spinner, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import { ModalButton, ModalWrapper, ModalHeaderWrapper } from './styled';

const ModalWindow = ({
  isBigModal,
  isOpen,
  modalHeaderTitle,
  footerButton,
  handleToggle,
  children,
  isButton,
  isLoading,
  onClick,
  disabled,
  hideCloseBtn,
  innerButtonTheme,
}) => {
  return (
    <ModalWrapper isBigModal={isBigModal} isOpen={isOpen}>
      <ModalHeaderWrapper hideCloseBtn={hideCloseBtn} toggle={handleToggle}>
        {modalHeaderTitle}
      </ModalHeaderWrapper>
      <ModalBody>{children}</ModalBody>
      {isButton && (
        <ModalFooter>
          {footerButton ? (
            <>{footerButton}</>
          ) : (
            <>
              <ModalButton
                theme={innerButtonTheme}
                disabled={disabled || isLoading}
                onClick={onClick}
              >
                {isLoading ? <Spinner size="sm" /> : '네'}
              </ModalButton>
              <ModalButton theme={innerButtonTheme} onClick={handleToggle}>
                아니오
              </ModalButton>
            </>
          )}
        </ModalFooter>
      )}
    </ModalWrapper>
  );
};

ModalWindow.propTypes = {
  isBigModal: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  footerButton: PropTypes.node,
  handleToggle: PropTypes.func,
  hideCloseBtn: PropTypes.bool,
  isButton: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  modalHeaderTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  innerButtonTheme: PropTypes.string,
};

ModalWindow.defaultProps = {
  isBigModal: false,
  disabled: false,
  footerButton: null,
  hideCloseBtn: false,
  isButton: true,
  isLoading: false,
  handleToggle: () => {},
  onClick: () => {},
  innerButtonTheme: 'black',
};
export default ModalWindow;
