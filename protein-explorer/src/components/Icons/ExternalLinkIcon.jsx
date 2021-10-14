import { IconSvg } from "./IconSvg";

const INTRINSIC_WIDTH = 16;
const INTRINSIC_HEIGHT = 16;

export const ExternalLinkIcon = ({
  width = INTRINSIC_WIDTH,
  height,
  color = "currentColor",
  ...restProps
}) => (
  <IconSvg
    iconId="external-link"
    width={width}
    height={height}
    viewboxWidth={INTRINSIC_WIDTH}
    viewboxHeight={INTRINSIC_HEIGHT}
    {...restProps}
  >
    <path
      d="M5.859 10.121L10.1 5.88M6.33 5.879h3.771v3.77"
      stroke={color}
      strokeWidth="1.5"
    />
  </IconSvg>
);
