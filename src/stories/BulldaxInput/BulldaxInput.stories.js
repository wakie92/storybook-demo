import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from "@storybook/addon-knobs";

import BulldaxInput from "./BulldaxInput";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Theme|Basic/Input",
  parameters: {
    componentSubtitle: "Input component",
  },
  component: BulldaxInput,
  decorators: [withKnobs],
};

export const bulldaxInput = () => {
  const disabled = boolean("disabled", false);
  const isInvalid = boolean("isInvalid", false);
  const invalidLabel = <p>invalidLabel</p>;
  const placeholder = text("placeholder", "PLACE_HOLDER");
  const autoComplete = select("autoComplete", ["on", "off"], "on");
  const required = boolean("required", false);
  const type = select("type", ["text", "password"]);
  const className = text("className", "");
  const containerStyle = text("containerStyle", "");
  return (
    <BulldaxInput
      disabled={disabled}
      isInvalid={isInvalid}
      invalidLabel={isInvalid && invalidLabel}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      type={type}
      containerStyle={containerStyle}
      className={className}
    />
  );
};

bulldaxInput.story = {
  name: "Default",
};
