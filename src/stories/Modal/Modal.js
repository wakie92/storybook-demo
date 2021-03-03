import { Fragment } from "react";
import { useTransition } from "react-spring";
import PropTypes from "prop-types";

import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import { FullDarkLayer, ModalWrapper, WhiteBox } from "./styled";

const Modal = ({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  children,
  onCancel,
  onConfirm,
}) => {
  const fadeTransition = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const slideUpTransition = useTransition(visible, null, {
    from: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    enter: {
      transform: `translateY(0px) scale(1)`,
      opacity: 1,
    },
    leave: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 15,
    },
  });

  return (
    <Fragment>
      {fadeTransition.map(({ item, key, props }) =>
        item ? <FullDarkLayer key={key} style={props}></FullDarkLayer> : null
      )}

      {slideUpTransition.map(({ item, key, props }) =>
        item ? (
          <ModalWrapper style={props} key={key}>
            <WhiteBox>
              {title && <h3>{title}</h3>}
              {description && <p>{description}</p>}
              {children}
              {!hideButtons && (
                <ButtonGroup customStyle={{ marginTop: "3rem" }} rightAlign>
                  {cancellable && (
                    <Button theme="tertiary" onClick={onCancel}>
                      {cancelText}
                    </Button>
                  )}
                  <Button onClick={onConfirm}>{confirmText}</Button>
                </ButtonGroup>
              )}
            </WhiteBox>
          </ModalWrapper>
        ) : null
      )}
    </Fragment>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  hideButtons: PropTypes.bool,
  cancellable: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};
Modal.defaultProps = {
  cancelText: "Cancel",
  confirmText: "Confirm",
};
export default Modal;
