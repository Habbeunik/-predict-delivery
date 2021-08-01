import { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
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
        <Modal
          basic
          size="small"
          open={!!prediction}
          onClose={() => setPrediction(null)}
        >
          <Header icon>
            <Icon name="user md" />
            {prediction}
          </Header>
          <Modal.Content>
            <p>
              From the data collected and the model we have trained this is the
              most likely outcome.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              color="red"
              inverted
              onClick={() => setPrediction(false)}
            >
              <Icon name="remove" /> Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
}

export default App;
