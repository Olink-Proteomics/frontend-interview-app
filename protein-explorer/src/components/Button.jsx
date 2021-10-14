import classNames from "classnames";

import "../styles/button.css";

export const Button = ({
  size = "normal",
  disabled,
  children,
  ...restProps
}) => (
  <>
    <button
      className={classNames("button", `button-${size}`)}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  </>
);
