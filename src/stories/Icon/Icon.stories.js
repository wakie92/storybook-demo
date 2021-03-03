import Icon, { iconTypes } from "./Icon";
import { IconListStyle } from "./styled";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "components|basic/Icon",
  component: Icon,
};

export const icon = () => <Icon icon="heart" />;
icon.story = {
  name: "Default",
};

export const customSize = () => <Icon icon="heart" size="4rem" />;

export const customColor = () => <Icon icon="heart" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="heart" color="red" size="4rem" />
);

export const listOfIcons = () => {
  return (
    <IconListStyle>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </IconListStyle>
  );
};
