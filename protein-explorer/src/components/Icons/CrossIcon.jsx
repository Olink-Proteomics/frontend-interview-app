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

export const CrossIcon = ({
  width,
  height,
  color = "currentColor",
  iconSize = "regular",
  ...restProps
}) => (
  <IconSvg
    iconId="cross"
    width={width || INTRINSIC_SIZES[iconSize].width}
    height={height || INTRINSIC_SIZES[iconSize].height}
    viewboxWidth={INTRINSIC_SIZES[iconSize].width}
    viewboxHeight={INTRINSIC_SIZES[iconSize].height}
    {...restProps}
  >
    {iconSize === "regular" && (
      <path
        d="M16.828 7.172l-9.656 9.656m0-9.656l9.656 9.656"
        stroke={color}
        strokeWidth="1.5"
      />
    )}

    {iconSize === "small" && (
      <path
        d="M11.219 4.781l-6.438 6.438m0-6.438l6.438 6.438"
        stroke={color}
        strokeWidth="1.5"
      />
    )}
  </IconSvg>
);
