import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissibleExample(heading, content) {
  const [show, setShow] = useState(true);
  console.log(heading, content);
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading.heading}</Alert.Heading>
        <p>{heading.content}</p>
      </Alert>
    );
  }
  return (
    <>
      {["success"].map((variant) => (
        <Alert key={variant} variant={variant}>
          HAVE A  HAPPY DAY WITH US
        </Alert>
      ))}
    </>
  );
}

export default AlertDismissibleExample;
