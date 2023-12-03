import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Alerting you</Alert>
      )}
      <Button
        color="warning"
        text="Click Me!"
        onClick={() => (setShowAlert(true), console.log("clicked"))}
      ></Button>
    </div>
  );
}
export default App;
