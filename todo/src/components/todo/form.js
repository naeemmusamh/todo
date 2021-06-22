import { Form, Button, Card } from "react-bootstrap";
import useForm from '../../hooks/useForm.js';

export default function TodoForm (props) {
  const [handleInputChange, handleSubmit] = useForm(props.handleSubmit);

  return (
    <Card>
      <Card.Header as="h3">Add Item</Card.Header>
      <Card.Body>
        <Form
          onSubmit={async (e) => {
            await handleSubmit(e);
            await props.fetch();
          }}
        >
          <Form.Group>
            <Form.Label>To Do Item</Form.Label>
            <Form.Control
              type="text"
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control
              defaultValue="1"
              type="range"
              min="1"
              max="5"
              name="difficulty"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control
              type="text"
              name="assignee"
              placeholder="Assigned To"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};