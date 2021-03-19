import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import BulldaxButton from "./BulldaxButton";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Theme|Basic/BulldaxButton",
  parameters: {
    componentSubtitle: "Button Component",
  },
  decorators: [withKnobs],
  component: BulldaxButton,
};

export const bulldaxButton = () => {
  const label = text("children", "BUTTON");
  const isLoading = boolean("isLoading", false);
  const theme = select(
    "theme",
    [
      "black",
      "black-outline",
      "red",
      "red-hanbitco",
      "red-outline",
      "primary",
      "danger",
      "link",
      "grey",
      "blue",
    ],
    "primary"
  );
  const disabled = boolean("disabled", false);
  const type = select("type", ["button", "submit", "reset"], "button");
  const fullWidth = boolean("fullWidth", false);
  const spinnerSize = select("spinnerSize", ["sm", "md", "lg", "xlg"], "sm");
  const spinnerType = select("spinnerType", ["border", "grow"], "border");

  return (
    <BulldaxButton
      type={type}
      fullWidth={fullWidth}
      spinnerSize={spinnerSize}
      spinnerType={spinnerType}
      disabled={disabled}
      theme={theme}
      isLoading={isLoading}
    >
      {label}
    </BulldaxButton>
  );
};

bulldaxButton.story = {
  name: "Default",
};

export const collectionOfButtons = () => {
  return (
    <ButtonGroup direction="column">
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="black"
      >
        BLACK
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="black-outline"
      >
        BLACK_OUTLINE
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="red"
      >
        RED
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="red-hanbitco"
      >
        RED_HANBITCO
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="red-outline"
      >
        RED_OUTLINE
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="primary"
      >
        PRIMARY
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="danger"
      >
        DANGER
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="link"
      >
        LINK
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="grey"
      >
        GREY
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="blue"
      >
        BLUE
      </BulldaxButton>
    </ButtonGroup>
  );
};

export const collectionOfDisabledButtons = () => {
  return (
    <ButtonGroup direction="column">
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="black"
        disabled
      >
        BLACK
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="black-outline"
        disabled
      >
        BLACK_OUTLINE
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="red"
        disabled
      >
        RED
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="red-hanbitco"
        disabled
      >
        RED_HANBITCO
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="red-outline"
        disabled
      >
        RED_OUTLINE
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="primary"
        disabled
      >
        PRIMARY
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="danger"
        disabled
      >
        DANGER
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="link"
        disabled
      >
        LINK
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="grey"
        disabled
      >
        GREY
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="blue"
        disabled
      >
        BLUE
      </BulldaxButton>
    </ButtonGroup>
  );
};

export const customSize = () => {
  return (
    <ButtonGroup direction="column">
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 5rem "}
        theme="black"
      >
        BLACK
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 10rem "}
        theme="black-outline"
      >
        BLACK_OUTLINE
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 20rem "}
        theme="red"
      >
        RED
      </BulldaxButton>
    </ButtonGroup>
  );
};

export const Loading = () => {
  return (
    <ButtonGroup direction="column">
      <h1>Board (default) </h1>
      <BulldaxButton
        isLoading
        fullWidth={false}
        buttonStyle={" width: 20rem "}
        theme="red"
        spinnerSize="lg"
      >
        RED
      </BulldaxButton>
      <BulldaxButton
        isLoading
        fullWidth={false}
        buttonStyle={" width: 20rem "}
        theme="red"
        spinnerSize="md"
      >
        RED
      </BulldaxButton>
      <BulldaxButton
        isLoading
        fullWidth={false}
        buttonStyle={" width: 20rem "}
        theme="red"
        spinnerSize="sm"
      >
        RED
      </BulldaxButton>
      <h1>Grow</h1>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 5rem "}
        theme="black"
        isLoading
        spinnerType="grow"
        spinnerSize="lg"
      >
        BLACK
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 5rem "}
        theme="black"
        isLoading
        spinnerType="grow"
        spinnerSize="md"
      >
        BLACK
      </BulldaxButton>
      <BulldaxButton
        fullWidth={false}
        buttonStyle={" width: 5rem "}
        theme="black"
        isLoading
        spinnerType="grow"
      >
        BLACK
      </BulldaxButton>
    </ButtonGroup>
  );
};
