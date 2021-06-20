import React from "react";
import { ListGroup } from "react-bootstrap";
import "../../App.scss";

export default function TodoList(props) {
  return (
    <ListGroup>
      {props.list.map((item) => (
        <ListGroup.Item
          action
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          variant={item.complete ? `success` : `danger`}
          onClick={() => props.handleComplete(item._id)}
        >
          {item.text}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
