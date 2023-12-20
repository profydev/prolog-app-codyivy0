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

  return (
    <div className={styles.selectContainer}>
      {label && <label className="label">{label}</label>}
      {icon && <Image src={icon} alt="icon" height={40} width={40} />}
      <select
        name="select"
        id="select"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Select team member
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hint && <small className="hint">{hint}</small>}
    </div>
  );
}
