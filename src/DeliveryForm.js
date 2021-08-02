import { getFormIsInvalid } from "./functions";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
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

const DeliveryForm = ({ onSubmit }) => {
  const [values, setValues] = useState(DEFAULT_VALUES);
  const setFieldValue = (name, value) => {
    setValues((values) => ({ ...values, [name]: value }));
  };

  const getFieldController = (name) => ({
    value: values[name],
    onChange: (value) => setFieldValue(name, value),
  });

  const formIsInvalid = getFormIsInvalid(values);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(values);
    setValues(DEFAULT_VALUES);
  };

  return (
    <form onSubmit={handleSubmit}>
      <RadioField
        label="Are you pregnant for the first time?"
        options={[
          { label: "Yes", value: "YES" },
          { label: "No", value: "NO" },
        ]}
        {...getFieldController("PRIMP")}
      />

      <RadioField
        label="Have you been pregnant for up to 3 times?"
        options={[
          { label: "Yes", value: "YES" },
          { label: "No", value: "NO" },
        ]}
        {...getFieldController("MULTI<3")}
      />

      <RadioField
        label="Please select your age range?"
        options={[
          { label: "16 - 27", value: "16-27" },
          { label: "28 - 50", value: "28-50" },
        ]}
        {...getFieldController("AGE")}
      />

      <RadioField
        label="What is your gestation?"
        options={[
          { label: "Single", value: "SING" },
          { label: "Multiple", value: "MULTI" },
        ]}
        {...getFieldController("GESTATION")}
      />

      <RadioField
        label="What is your fetal lie?"
        options={[
          { label: "Longitudinal", value: "LONGITUDINAL" },
          { label: "Transverse", value: "TRANSVERSE" },
          { label: "Oblique", value: "OBLIQUE" },
        ]}
        {...getFieldController("FETAL_LIE")}
      />

      <RadioField
        label="What is your placenta location?"
        options={[
          { label: "Posterior", value: "POSTERIOR" },
          { label: "Anterior", value: "ANTERIOR" },
          { label: "Fundal", value: "FUNDAL" },
        ]}
        {...getFieldController("PLACENTA_LOCATION")}
      />

      <RadioField
        label="What is your fetal presenstation?"
        options={[
          { label: "Cepahlic", value: "CEPHALIC" },
          { label: "Breech", value: "BREECH" },
        ]}
        {...getFieldController("FETAL")}
      />

      <Button primary size="large" disabled={formIsInvalid} role="medium">
        Predict
      </Button>
    </form>
  );
};

export default DeliveryForm;
