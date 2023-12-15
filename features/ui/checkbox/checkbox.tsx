import classNames from "classnames";
import styles from "./checkbox.module.scss";
import { InputHTMLAttributes, useRef, useEffect } from "react";

export enum CheckboxSize {
  small = "small",
  medium = "medium",
}

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: CheckboxSize;
  indeterminate?: boolean;
  label?: string;
}

export function Checkbox({
  size = CheckboxSize.small,
  indeterminate = false,
  label,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return (
    <label className={styles.flex}>
      <input
        type="checkbox"
        {...props}
        ref={checkboxRef}
        className={classNames(styles.checkbox, styles[size], props.className)}
      />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
