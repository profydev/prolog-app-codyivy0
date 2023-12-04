import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  none = "none",
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  emptyWhite = "emptyWhite",
  error = "error",
}

export enum ButtonState {
  default = "default",
  hover = "hover",
  focused = "focused",
  disabled = "disabled",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  state?: ButtonState;
  icon?: JSX.Element;
}

export function Button({
  size = ButtonSize.none,
  color = ButtonColor.emptyWhite,
  state = ButtonState.default,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[state],
        props.className,
      )}
      disabled={true}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {props.children}
    </button>
  );
}
