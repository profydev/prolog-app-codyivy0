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

export enum IconPosition {
  leading = "leading",
  trailing = "trailing",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: JSX.Element;
  iconPosition?: IconPosition;
}

export function Button({
  size = ButtonSize.none,
  color = ButtonColor.emptyWhite,
  icon,
  iconPosition,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        props.className,
      )}
    >
      <span className={styles.buttonContent}>
        {icon && iconPosition === IconPosition.leading && (
          <span className={styles.icon}>{icon}</span>
        )}
        {props.children}
        {icon && iconPosition === IconPosition.trailing && (
          <span className={styles.icon}>{icon}</span>
        )}
      </span>
    </button>
  );
}
