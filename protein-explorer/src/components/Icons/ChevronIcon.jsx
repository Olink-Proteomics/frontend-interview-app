import classNames from "classnames";

import { IconSvg } from "./IconSvg";

const INTRINSIC_SIZES = {
  small: {
    width: 16,
    height: 16,
  },
  regular: {
    width: 24,
    height: 24,
  },
};

export const ChevronIcon = ({
  width,
  height,
  className,
  color = "currentColor",
  iconSize = "regular",
  direction = "down",
  ...restProps
}) => (
  <IconSvg
    iconId="chevron-down"
    width={width || INTRINSIC_SIZES[iconSize].width}
    height={height || INTRINSIC_SIZES[iconSize].height}
    viewboxWidth={INTRINSIC_SIZES[iconSize].width}
    viewboxHeight={INTRINSIC_SIZES[iconSize].height}
    className={classNames(
      { "transform rotate-90": direction === "left" },
      { "transform rotate-180": direction === "up" },
      { "transform -rotate-90": direction === "right" },
      className
    )}
    {...restProps}
  >
    {iconSize === "regular" && (
      <path d="M16 10l-4 4-4-4" stroke={color} strokeWidth="1.5" />
    )}

    {iconSize === "small" && (
      <path
        d="M10.667 6.667L8 9.332 5.333 6.666"
        stroke={color}
        strokeWidth="1.5"
      />
    )}
  </IconSvg>
);
