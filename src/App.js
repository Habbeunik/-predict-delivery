import { useState } from "react";
import "./App.css";

import DeliveryForm from "./DeliveryForm";
import { getPrediction } from "./functions";

function App() {
  const [prediction, setPrediction] = useState();

  const handleSubmit = (values) => {
    setPrediction(getPrediction(values));
  };

  return (
    <div className="page">
      <div className="formContainer">
        <DeliveryForm onSubmit={handleSubmit} />
      </div>
      <div class={`result ${prediction && "resultActive"}`}>
        <div>
          <div class="resultHeader">Prediction</div>
          <div class="resultText">{prediction}</div>
          <div class="resultClose" onClick={() => setPrediction(null)}>
            Close x
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
