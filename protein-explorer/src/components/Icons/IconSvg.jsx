import classNames from "classnames";

export const IconSvg = ({
  children,
  iconId,
  width,
  height,
  viewboxWidth,
  viewboxHeight,
  fill = "none",
  className,
  ...htmlAttributes
}) => (
  <svg
    fill={fill}
    width={width}
    height={height || Number(width) * (viewboxHeight / viewboxWidth)}
    viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
    className={classNames(`icon icon-${iconId}`, className)}
    {...htmlAttributes}
  >
    {children}
  </svg>
);
