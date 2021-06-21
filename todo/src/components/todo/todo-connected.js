import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import TopSection from "./progress.js";
import useAjax from "../hook/useAjax.js";
import "./todo.scss";

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

export default function ToDo() {
  const [list, postItem, deleteItem, putItem, getItems] = useAjax(todoAPI);

  useEffect(
    () =>
      (document.title = `To Do List: ${
        list.filter((item) => !item.complete).length
      }`)
  );

  useEffect(getItems, [getItems]);

  return (
    <Container>
      <Row className="mt-5 mb-4">
        <Col>
          <TopSection list={list} />
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <TodoForm handleSubmit={postItem} />
        </Col>
        <Col md="8">
          <TodoList
            list={list}
            handleComplete={putItem}
            handleDelete={deleteItem}
          />
        </Col>
      </Row>
    </Container>
  );
}
