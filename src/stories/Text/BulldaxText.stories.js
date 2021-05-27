import {
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
  TextHeadline,
  Text,
  TextSmall,
  TextSmaller,
  TextBadge,
} from '../../styles/styledComponents/textStyled';
import BulldaxText from './BulldaxText';
import mdx from './BulldaxText.mdx';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Theme|Basic/Text',
  parameters: {
    componentSubtitle: 'CheckBox Component',
    docs: {
      page: mdx,
    },
  },
  component: BulldaxText,
};

export const bulldaxText = () => {
  return (
    <>
      <BulldaxText>
        <TitleH1>TITLE H1</TitleH1>
      </BulldaxText>
      <BulldaxText>
        <TitleH2>TITLE H2</TitleH2>
      </BulldaxText>
      <BulldaxText>
        <TitleH3>TITLE H3</TitleH3>
      </BulldaxText>
      <BulldaxText>
        <TitleH4>TITLE H4</TitleH4>
      </BulldaxText>
      <BulldaxText>
        <TextHeadline>TEXT HEAD LINE</TextHeadline>
      </BulldaxText>
      <BulldaxText>
        <Text>TEXT</Text>
      </BulldaxText>
      <BulldaxText>
        <TextSmall>TEXT SMALL</TextSmall>
      </BulldaxText>
      <BulldaxText>
        <TextSmaller>TEXT SMALLER</TextSmaller>
      </BulldaxText>
      <BulldaxText>
        <TextBadge isFull={false}>TEXT BADGE</TextBadge>
      </BulldaxText>
    </>
  );
};

bulldaxText.story = {
  name: 'Default',
};
