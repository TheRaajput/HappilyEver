import React from "react";
import Card from "../UI/Card/Card";
import { Image } from "react-bootstrap";
import classes from "./Home.module.css";

const PostArea = (props) => {
  return (
    <React.Fragment>
      {props.posts.map((el) => (
        <div key={el.id}>
          <Card className={classes.crd}>
            <p style={{ textAlign: "left", fontSize: "12px" }}>{el.time}</p>
            <p style={{ textAlign: "left" }}>
              <strong>{el.Name}</strong>
            </p>
            <Image
              src={el.Images ? URL.createObjectURL(el.Images) : props.img}
              roundedCircle
              className={classes.image}
            />
            <p>Hey! I'm {el.Name}</p>
            <table className={classes.table__style}>
              <tbody>
                <tr>
                  <td className={classes.table_bold}>Date of Birth</td>
                  <td>{el.dob}</td>
                </tr>
                <tr>
                  <td className={classes.table_bold}>Religion</td>
                  <td>{el.religion}</td>
                </tr>
                <tr>
                  <td className={classes.table_bold}>Height</td>
                  <td>{el.Height}cm</td>
                </tr>
              </tbody>
            </table>
          </Card>
          <hr></hr>
        </div>
      ))}
    </React.Fragment>
  );
};

export default PostArea;
