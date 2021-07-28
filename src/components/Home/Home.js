import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./Home.module.css";
import PostModal from "../Post/PostModal";
import img from "../images/profile.png";
import PostArea from "./PostArea";

const Home = () => {
  // .............................Hooks........................//
  const [Userdata, setUserdata] = useState([
    {
      id: Math.random() * 10,
      Name: "Akshay",
      dob: "01-4-1900",
      religion: "Hindu",
      Height: "170",
      time: new Date().toLocaleTimeString(),
    },
    {
      id: Math.random() * 10,
      Name: "Kumail Ahmed",
      dob: "01-4-1990",
      religion: "Muslim",
      Height: "160",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [show, setShow] = useState(false);

  // .............................Handler........................//
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ....................Appending to array saving previous state........................//

  const getUserdata = (userdata) => {
    setUserdata((prev) => {
      return [userdata, ...prev];
    });
  };

  return (
    <div className={classes.home}>
      <PostModal
        show={show}
        handleClose={handleClose}
        getPostData={getUserdata}
      />
      <PostArea img={img} posts={Userdata} />
      <Button
        variant="primary"
        onClick={handleShow}
        className={classes.floatbtn}
        size="lg"
      >
        POST
      </Button>
    </div>
  );
};

export default Home;
