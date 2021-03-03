import * as icons from "./svg";

export const iconTypes = Object.keys(icons);

/** Use the `icon` component when you want to show the icon.
 *
 * This component shows the icon in svg form, and you can define the color and size of the icon using props or styles.
 *
 * When setting the shape of the style, set the color to `color` and set the size to `width`.
 */

export const Icon = ({ icon, color, size, className }) => {
  const SVGIcon = icons[icon];

  return (
    <SVGIcon
      style={{ fill: color || "currentColor", width: size, height: "auto" }}
      className={className}
    />
  );
};

export default Icon;
