import React, { useState } from "react";
import RadioField from "./RadioField";

const DEFAULT_VALUES = {
  PRIMP: null,
  "MULTI<3": null,
  AGE: null,
  GESTATION: null,
  FETAL_LIE: null,
  PLACENTA_LOCATION: null,
  FETAL: null,
};

const form = [
  {
    label: "Are you pregnant for the first time?",
    options: [
      { label: "Yes", value: "YES" },
      { label: "No", value: "NO" },
    ],
    key: "PRIMP",
  },
  {
    label: "Have you been pregnant for up to 3 times?",
    options: [
      { label: "Yes", value: "YES" },
      { label: "No", value: "NO" },
    ],
    key: "MULTI<3",
  },
  {
    label: "Please select your age range",
    options: [
      { label: "16 - 27", value: "16-27" },
      { label: "28 - 50", value: "28-50" },
    ],
    key: "AGE",
  },
  {
    label: "What is your gestation?",
    options: [
      { label: "Single", value: "SING" },
      { label: "Multiple", value: "MULTI" },
    ],
    key: "GESTATION",
  },
  {
    label: "What is your fetal lie?",
    options: [
      { label: "Longitudinal", value: "LONGITUDINAL" },
      { label: "Transverse", value: "TRANSVERSE" },
      { label: "Oblique", value: "OBLIQUE" },
    ],
    key: "FETAL_LIE",
  },
  {
    label: "What is your placenta location?",
    options: [
      { label: "Posterior", value: "POSTERIOR" },
      { label: "Anterior", value: "ANTERIOR" },
      { label: "Fundal", value: "FUNDAL" },
    ],
    key: "PLACENTA_LOCATION",
  },
  {
    label: "What is your fetal presenstation?",
    options: [
      { label: "Cepahlic", value: "CEPHALIC" },
      { label: "Breech", value: "BREECH" },
    ],
    key: "FETAL",
  },
];

const DeliveryForm = ({ onSubmit }) => {
  const [values, setValues] = useState(DEFAULT_VALUES);
  const setFieldValue = (name, value) => {
    setValues((values) => ({ ...values, [name]: value }));
  };
  const [currentField, setCurrentField] = useState("PRIMP");

  const getFieldController = (name, index) => ({
    value: values[name],
    onChange: (value) => {
      setFieldValue(name, value);

      if (index === form.length - 1) {
        onSubmit({ ...values, [name]: value });
        setValues(DEFAULT_VALUES);
        setCurrentField("PRIMP");
      } else {
        if (name === "PRIMP" && value === "YES") {
          setCurrentField(form[index + 2].key);
          setFieldValue("MULTI<3", "NO");
        } else {
          setCurrentField(form[index + 1].key);
        }
      }
    },
  });

  return (
    <div>
      {form.map((field, index) => (
        <RadioField
          key={field.key}
          isActive={field.key === currentField}
          label={field.label}
          options={field.options}
          {...getFieldController(field.key, index)}
        />
      ))}
    </div>
  );
};

export default DeliveryForm;
