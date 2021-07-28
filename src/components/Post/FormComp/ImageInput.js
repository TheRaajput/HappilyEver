import { Form, Image } from "react-bootstrap";

const ImageInput = (props) => {
  return (
    <Form.Group className="mb-2 text-center" controlId="formBasicEmail">
      <Image
        src={props.image}
        roundedCircle
        className={`${props.style} ${"mb-2"}`}
      />
      <Form.Control type="file" onChange={props.FileHandler} />
    </Form.Group>
  );
};

export default ImageInput;
