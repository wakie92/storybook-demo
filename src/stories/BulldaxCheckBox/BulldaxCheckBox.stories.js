import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import BulldaxCheckBox from "./BulldaxCheckBox";
import { colors } from "../../styles/theme";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Theme|Basic/BulldaxCheckBox",
  parameters: {
    componentSubtitle: "CheckBox Component",
  },
  decorators: [withKnobs],
  component: BulldaxCheckBox,
};

export const bulldaxCheckBox = () => {
  const isRound = boolean("isRound", false);
  const id = text("id", "default");
  const checkedDefault = boolean("checkedDefault", false);
  const disabled = boolean("disabled", false);
  const containerStyle = text("containerStyle", "");
  const labelStyle = text("labetStyle", "");
  const checkBoxStyle = text("checkBoxStyle", "");
  const label = text("children", "CHECK BOX");
  const handleClick = () => {
    alert("click");
  };
  return (
    <>
      <BulldaxCheckBox
        checkBoxStyle={checkBoxStyle}
        containerStyle={containerStyle}
        checkedDefault={checkedDefault}
        disabled={disabled}
        handleClick={handleClick}
        id={id}
        isRound={isRound}
        labelStyle={labelStyle}
      >
        {label}
      </BulldaxCheckBox>
      <BulldaxCheckBox
        checkBoxStyle={checkBoxStyle}
        containerStyle={containerStyle}
        checkedDefault={checkedDefault}
        disabled={disabled}
        handleClick={handleClick}
        id={id}
        isRound={isRound}
        labelStyle={labelStyle}
      >
        {label}
      </BulldaxCheckBox>
      <BulldaxCheckBox
        checkBoxStyle={checkBoxStyle}
        containerStyle={containerStyle}
        checkedDefault={checkedDefault}
        disabled={disabled}
        handleClick={handleClick}
        id={id}
        isRound={isRound}
        labelStyle={labelStyle}
      >
        {label}
      </BulldaxCheckBox>
      <BulldaxCheckBox
        checkBoxStyle={checkBoxStyle}
        containerStyle={containerStyle}
        checkedDefault={checkedDefault}
        disabled={disabled}
        handleClick={handleClick}
        id={id}
        isRound={isRound}
        labelStyle={labelStyle}
      >
        {label}
      </BulldaxCheckBox>
    </>
  );
};

bulldaxCheckBox.story = {
  name: "Default",
};

export const roundCheckbox = () => {
  return (
    <>
      <BulldaxCheckBox id="round" isRound>
        ROUND CHECK BOX
      </BulldaxCheckBox>
      <BulldaxCheckBox id="round" isRound>
        ROUND CHECK BOX
      </BulldaxCheckBox>
      <BulldaxCheckBox id="round" isRound>
        ROUND CHECK BOX
      </BulldaxCheckBox>
    </>
  );
};

export const customColorCheckbox = () => {
  return (
    <>
      <BulldaxCheckBox
        id="round"
        isRound
        checkBoxStyle={`background-color: ${colors.lightBlueHa3b7ff}`}
      >
        ROUND CHECK BOX
      </BulldaxCheckBox>
      <BulldaxCheckBox
        id="round"
        isRound
        checkBoxStyle={`background-color: ${colors.redHeea7b2}`}
      >
        ROUND CHECK BOX
      </BulldaxCheckBox>
      <BulldaxCheckBox
        id="round"
        isRound
        checkBoxStyle={`background-color: ${colors.greenH49e7b7}`}
      >
        ROUND CHECK BOX
      </BulldaxCheckBox>
    </>
  );
};
