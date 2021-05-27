import Colors from './Colors';
import colorsCollection from './colorsCollection';
import { ColorsWrapper } from './styled';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Theme|Basic/Colors',
  parameters: {
    componentSubtitle: 'Button component',
  },
  component: Colors,
};

export const colors = () => {
  const colorsValue = Object.values(colorsCollection);

  return (
    <ColorsWrapper>
      {colorsValue.map(color => (
        <Colors key={color} bgColor={color} />
      ))}
    </ColorsWrapper>
  );
};

colors.story = {
  name: 'Default',
};

export const BlackColors = () => {
  const blackColors = Object.keys(colorsCollection).filter(color => color.includes('black'));

  return (
    <ColorsWrapper>
      {blackColors.map(color => (
        <Colors key={color} bgColor={colorsCollection[color]} />
      ))}
    </ColorsWrapper>
  );
};

export const BlueColors = () => {
  const blueColors = Object.keys(colorsCollection).filter(color => color.includes('blue'));

  return (
    <ColorsWrapper>
      {blueColors.map(color => (
        <Colors key={color} bgColor={colorsCollection[color]} />
      ))}
    </ColorsWrapper>
  );
};

export const GreenColors = () => {
  const greenColors = Object.keys(colorsCollection).filter(color => color.includes('green'));

  return (
    <ColorsWrapper>
      {greenColors.map(color => (
        <Colors key={color} bgColor={colorsCollection[color]} />
      ))}
    </ColorsWrapper>
  );
};

export const GreyColors = () => {
  const greyColors = Object.keys(colorsCollection).filter(color => color.includes('grey'));

  return (
    <ColorsWrapper>
      {greyColors.map(color => (
        <Colors key={color} bgColor={colorsCollection[color]} />
      ))}
    </ColorsWrapper>
  );
};

export const LightBlueColors = () => {
  const lightBlueColors = Object.keys(colorsCollection).filter(color =>
    color.includes('lightBlue'),
  );

  return (
    <ColorsWrapper>
      {lightBlueColors.map(color => (
        <Colors key={color} bgColor={colorsCollection[color]} />
      ))}
    </ColorsWrapper>
  );
};

export const RedColors = () => {
  const redColors = Object.keys(colorsCollection).filter(color => color.includes('red'));

  return (
    <ColorsWrapper>
      {redColors.map(color => (
        <Colors key={color} bgColor={colorsCollection[color]} />
      ))}
    </ColorsWrapper>
  );
};

export const WhiteColors = () => {
  const whiteColors = Object.keys(colorsCollection).filter(color => color.includes('white'));

  return (
    <ColorsWrapper>
      {whiteColors.map(color => (
        <Colors key={color} bgColor={colorsCollection[color]} />
      ))}
    </ColorsWrapper>
  );
};
