import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Profile from "../images/profile.png";
import DateInput from "./FormComp/DateInput";
import ImageInput from "./FormComp/ImageInput";
import Select from "./FormComp/Select";
import Text from "./FormComp/Text";
import classes from "./Post.module.css";

const PostForm = (props) => {
  // ........................HOOKS..............................//
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [Religion, setReligion] = useState("");
  const [height, setheight] = useState("");
  const [File, setFile] = useState(null);


  // ..........................All Posting Details Handler............................//
  const NameHandler = (ev) => {
    setname(ev.target.value);
  };
  const DOBHandler = (ev) => {
    setdob(ev.target.value);
  };
  const ReligionHandler = (ev) => {
    setReligion(ev.target.value);
  };
  const HeightHandler = (ev) => {
    setheight(ev.target.value);
  };
  const ImageHandler = (ev) => {
    setFile(ev.target.files[0]);
  };

  // ...............Main Submit Handler...................//

  const PostHandler = (ev) => {
    ev.preventDefault();
    let data = {
      id: Math.random()*10,
      Name: name,
      dob: dob,
      religion: Religion,
      Height: height,
      Images: File,
      time: new Date().toLocaleTimeString(),
    };
    props.onGettingPostData(data);
    props.handleClose();
  };

  return (
    <Form onSubmit={PostHandler}>
      <ImageInput
        FileHandler={ImageHandler}
        style={classes.img}
        image={File ? URL.createObjectURL(File) : Profile}
      />
      <Text TextHandler={NameHandler} placeholder={"Name"} type={"text"} /> 
      <DateInput dateHandler={DOBHandler} title={"Date of Birth"} />
      <Select selectHandler={ReligionHandler} />
      <Text
        TextHandler={HeightHandler}
        placeholder={"Height"}
        type={"number"}
      />
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
};

export default PostForm;
