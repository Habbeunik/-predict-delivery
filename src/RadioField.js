import React from "react";

const RadioField = ({ options = [], isActive, label, onChange }) => {
  return (
    <div className={`field ${isActive && "fieldIsActive"}`}>
      <label className="fieldLabel">{label}</label>
      <div className="radioGroup">
        {options.map((opt) => (
          <button
            className="radioGroupItem"
            key={opt.value}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
