import Image from "next/image";
import { useState } from "react";
import styles from "./select.module.scss";

export interface SelectProps {
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
  icon?: string;
  label?: string;
  hint?: string;
}

export function Select({ icon, label, hint, options, onChange }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  function handleSelectChange(value: string) {
    const newValue = value;
    console.log(newValue);
    setSelectedValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
    setIsActive(!isActive);
  }

  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectContainer}>
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
          className={styles.selectBtn}
          onClick={() => setIsActive(!isActive)}
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
      {hint && <small className={styles.hint}>{hint}</small>}
    </div>
  );
}
