import { Form } from "react-bootstrap";

const DateInput = (props) => {
  return (
    <Form.Group className="mb-2" controlId="formBasicPassword">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control type="date" autoComplete="off" onChange={props.dateHandler} />
    </Form.Group>
  );
};

export default DateInput;
