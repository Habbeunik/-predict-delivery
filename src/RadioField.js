import React from "react";
import { Radio } from "semantic-ui-react";

const RadioField = ({ options = [], label, onChange, value }) => {
  return (
    <div className="field">
      <label className="fieldLabel">{label}</label>
      <div className="radioGroup">
        {options.map((opt) => (
          <div className="radioGroupItem" key={opt.value}>
            <Radio
              label={opt.label}
              onChange={() => onChange(opt.value)}
              checked={value === opt.value}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
