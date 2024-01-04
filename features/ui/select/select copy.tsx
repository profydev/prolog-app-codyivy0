import Image from "next/image";
import { ChangeEvent, useState } from "react";
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

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const newValue = e.target.value;
    setSelectedValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  }

  function handleCustomSelectClick() {
    // This function can trigger the click on the actual select element
    const selectElement = document.getElementById(`selectMember`);

    if (selectElement) {
      selectElement.click();
    }
  }

  return (
    <div className={styles.selectContainer}>
      {label && <label className="label">{label}</label>}
      <div className={styles.inputContainer} onClick={handleCustomSelectClick}>
        {icon && (
          <Image
            src={icon}
            className={styles.personIcon}
            alt="icon"
            height={40}
            width={40}
          />
        )}
        <select
          className={styles.select}
          name="select"
          id="selectMember"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="">Select team member</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Image
          src="/icons/chevron-down.svg"
          alt="down arrow"
          height={20}
          width={20}
        />
      </div>

      {hint && <small className="hint">{hint}</small>}
    </div>
  );
}
