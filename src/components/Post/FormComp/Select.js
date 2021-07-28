import { FloatingLabel, Form } from "react-bootstrap";

const Select = (props) => {
  return (
    <FloatingLabel label="Select Your Religion">
      <Form.Select
        className="mb-2"
        aria-label="Default select example"
        onChange={props.selectHandler}
        autoComplete="off"
      >
        <option>Select</option>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
      </Form.Select>
    </FloatingLabel>
  );
};

export default Select;
