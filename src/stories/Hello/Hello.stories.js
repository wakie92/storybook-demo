import React from "react";
import Hello from "./Hello";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// import mdx from "./Hello.mdx";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "components|basic/Hello",
  parameters: {
    componentSubtitle: 'A component that shows "Hello."',
    docs: {},
  },
  component: Hello,
  decorators: [withKnobs],
};

// create Knob
export const hello = () => {
  const big = boolean("big", false);
  const name = text("name", "Storybook");
  return (
    <Hello
      onHello={action("onHello")}
      onBye={action("onBye")}
      name={name}
      big={big}
    />
  );
};

hello.story = {
  name: "Default",
};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;
