import classNames from 'classnames'

import { IconSvg } from './IconSvg'

const INTRINSIC_SIZES = {
  small: {
    width: 16,
    height: 16,
  },
  regular: {
    width: 24,
    height: 24,
  },
}

export const ArrowIcon = ({
  width,
  height,
  className,
  color = 'currentColor',
  iconSize = 'regular',
  direction = 'right',
  ...restProps
}) => (
  <IconSvg
    iconId="arrow"
    width={width || INTRINSIC_SIZES[iconSize].width}
    height={height || INTRINSIC_SIZES[iconSize].height}
    viewboxWidth={INTRINSIC_SIZES[iconSize].width}
    viewboxHeight={INTRINSIC_SIZES[iconSize].height}
    className={classNames(
      { 'transform rotate-90': direction === 'down' },
      { 'transform rotate-180': direction === 'left' },
      { 'transform -rotate-90': direction === 'up' },
      className
    )}
    {...restProps}
  >
    {iconSize === 'regular' && (
      <path d="M7 12h9M12 8l4 4-4 4" stroke={color} strokeWidth="1.5" />
    )}

    {iconSize === 'small' && (
      <path
        d="M4.667 8h6M8 5.333L10.667 8 8 10.666"
        stroke={color}
        strokeWidth="1.333"
      />
    )}
  </IconSvg>
)
