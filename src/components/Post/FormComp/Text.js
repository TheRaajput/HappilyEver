import { Form } from "react-bootstrap"

const Text = (props) => {
    return (
        <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type={props.type} placeholder={props.placeholder} onChange={props.TextHandler} autoComplete="off"/>
      </Form.Group>
    )
}

export default Text
