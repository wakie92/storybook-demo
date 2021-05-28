import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import ModalWindow from './ModalWindow';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Theme|Basic/ModalWindow',
  parameters: {
    componentSubtitle: 'ModalWindow Component',
  },
  decorators: [withKnobs],
  component: ModalWindow,
};

export const modalWindow = () => {
  const label = text('children', 'Modal Content');
  const isLoading = boolean('isLoading', false);
  const isOpen = boolean('isOpen', true);
  const modalHeaderTitle = text('modalHeaderTitle', 'Modal header');
  const disabled = boolean('disabled', false);
  const innerButtonTheme = select(
    'innerButtonTheme',
    [
      'black',
      'black-outline',
      'red',
      'red-hanbitco',
      'red-outline',
      'primary',
      'danger',
      'link',
      'grey',
      'blue',
    ],
    'black',
  );
  return (
    <ModalWindow
      modalHeaderTitle={modalHeaderTitle}
      isLoading={isLoading}
      isOpen={isOpen}
      innerButtonTheme={innerButtonTheme}
      disabled={disabled}
    >
      {label}
    </ModalWindow>
  );
};
