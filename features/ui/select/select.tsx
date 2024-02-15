import Image from "next/image";
import { useState } from "react";
import styles from "./select.module.scss";

export interface SelectProps {
  options?: { value: string; label: string }[];
  icon?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
}
const optionsExample = [
  { value: "pheonix_baker", label: "Pheonix Baker" },
  { value: "olivia_rhye", label: "Olivia Rhye" },
  { value: "lana_steiner", label: "Lana Steiner" },
  { value: "demi_wilkonson", label: "Demi Wilkonson" },
  { value: "candice_wu", label: "Candice Wu" },
  { value: "natali_craig", label: "Natali Craig" },
  { value: "drew_cano", label: "Drew Cano" },
];
export function Select({
  icon = "/icons/users.svg",
  label,
  hint,
  options = optionsExample,
  error,
  disabled,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleSelectChange(value: string) {
    const newValue = value;
    console.log(newValue);
    setSelectedValue(newValue);

    setIsActive(!isActive);
  }

  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={`${disabled ? styles.disabled : ""} ${
          error ? styles.errorContainer : ""
        } ${styles.selectContainer} ${isFocused ? styles.focused : ""}  `}
      >
        {icon && (
          <Image
            src={icon}
            className={styles.personIcon}
            alt="icon"
            height={40}
            width={40}
          />
        )}
        <div
          className={` ${styles.selectBtn}  ${
            selectedValue ? "" : styles.empty
          } `}
          onClick={() => setIsActive(!isActive)}
          onKeyDown={(e) => e.key === "Enter" && setIsActive(!isActive)}
          tabIndex={0}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {selectedValue ? selectedValue : "Select team member"}
          <span>
            <Image
              className={isActive ? styles.flip : ""}
              src="/icons/chevron-down.svg"
              alt="select arrow"
              height={20}
              width={20}
            />
          </span>
        </div>

        {isActive && (
          <div className={styles.selectContent}>
            {options.map((option) => {
              return (
                <div
                  key={option.value}
                  data-value={option.value}
                  className={styles.option}
                  onClick={() => handleSelectChange(option.label)}
                >
                  {option.label}{" "}
                  {option.label === selectedValue && (
                    <Image
                      src="/icons/checkmark.svg"
                      alt="checkmark"
                      height={16}
                      width={16}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {hint && !error && <small className={styles.hint}>{hint}</small>}
      {error && <small className={styles.error}>{error}</small>}
    </div>
  );
}
