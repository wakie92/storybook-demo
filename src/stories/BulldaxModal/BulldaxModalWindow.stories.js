import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import BulldaxModalWindow from './BulldaxModalWindow';
import Button from '../BulldaxButton/BulldaxButton';
import { ButtonBlock } from '../Modal/styled';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Theme|Basic/BulldaxModal',
  parameters: {
    componentSubtitle: 'BulldaxModalWindow Component',
  },
  decorators: [withKnobs],
  component: BulldaxModalWindow,
};

export const modalWindow = () => {
  const bodyContent = text('bodyContent', 'Modal Content');
  const isOpenDefault = boolean('isOpenDefault', true);
  const headerContent = text('headerContent', 'Modal header');
  const footerBtnContent = text('footerBtnContent', 'Click');
  const disabled = boolean('disabled', false);
  const useDefaultFooterBtn = boolean('useDefaultFooterBtn', true);
  const hideCloseBtn = boolean('hideCloseBtn', true);
  const footerContent = boolean('footerContent', false);
  return (
    <BulldaxModalWindow
      headerContent={headerContent}
      isOpenDefault={isOpenDefault}
      disabled={disabled}
      bodyContent={bodyContent}
      footerBtnContent={footerBtnContent}
      useDefaultFooterBtn={useDefaultFooterBtn}
      hideCloseBtn={hideCloseBtn}
      footerContent={
        footerContent ? (
          <ButtonBlock>
            <Button size="lg" theme="red">
              Confirm
            </Button>
            <Button size="lg" theme="red">
              Close
            </Button>
          </ButtonBlock>
        ) : null
      }
    />
  );
};
