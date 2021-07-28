import React from "react";
import { Modal } from "react-bootstrap";
import PostForm from "./PostForm";

const PostModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostForm onGettingPostData={props.getPostData} handleClose={props.handleClose}/>
      </Modal.Body>
    </Modal>
  );
};

export default PostModal;
