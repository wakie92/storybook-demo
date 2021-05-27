import React from 'react';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

import Button from 'src/stories/BulldaxButton/BulldaxButton';
import ButtonGroup from './ButtonGroup';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Theme|Basic/ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = () => {
  const direction = radios('direction', { Row: 'row', Column: 'column' }, 'row');
  const rightAlign = boolean('rightAlign', false);
  const gap = text('gap', '0.5rem');

  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default',
};

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};
