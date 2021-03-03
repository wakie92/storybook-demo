import { action } from "@storybook/addon-actions";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import Button from "./Button";
import { ButtonWrapper } from "./styled";
// import mdx from "./Button.mdx";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "components|basic/Button",
  parameters: {
    componentSubtitle: "Button component",
  },
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text("children", "BUTTON");
  const size = select("size", ["small", "medium", "big"], "medium");
  const theme = select(
    "theme",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const disabled = boolean("disabled", false);
  const width = text("width", "");

  return (
    <Button
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action("onClick")}
    >
      {label}
    </Button>
  );
};

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};

export const secondaryButton = () => {
  return <Button theme="secondary">SECONDARY</Button>;
};

export const tertiaryButton = () => {
  return <Button theme="tertiary">TERTIARY</Button>;
};

export const sizes = () => {
  return (
    <ButtonWrapper>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </ButtonWrapper>
  );
};

export const disabled = () => {
  return (
    <ButtonWrapper>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary">
          TERTIARY
        </Button>
      </div>
    </ButtonWrapper>
  );
};

export const customSized = () => {
  return (
    <ButtonWrapper>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </ButtonWrapper>
  );
};

// export const withIcon = () => {
//   return (
//     <div>
//       <ButtonGroup>
//         <Button size="small">
//           <Icon icon="heart" /> LIKE
//         </Button>
//         <Button>
//           <Icon icon="heart" /> LIKE
//         </Button>
//         <Button size="big">
//           <Icon icon="heart" /> LIKE
//         </Button>
//       </ButtonGroup>
//     </div>
//   );
// };

// export const iconOnly = () => {
//   return (
//     <div>
//       <ButtonGroup>
//         <Button iconOnly size="small">
//           <Icon icon="heart" />
//         </Button>
//         <Button iconOnly>
//           <Icon icon="heart" />
//         </Button>
//         <Button iconOnly size="big">
//           <Icon icon="heart" />
//         </Button>
//       </ButtonGroup>
//     </div>
//   );
// };
