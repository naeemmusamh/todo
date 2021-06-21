import { ProgressBar, Card } from "react-bootstrap";

export default function TopSection({ list }) {
  return (
    <Card className="bg-light">
      <Card.Body>
        <Card.Title as="h2">To Do List Manager</Card.Title>
        <ProgressBar>
          <ProgressBar
            striped
            animated
            variant="success"
            now={
              list.filter((item) => item.complete).length * list.length * 100
            }
            key={1}
            label={`Completed Items: ${
              list.filter((item) => item.complete).length
            }`}
          />
          <ProgressBar
            animated
            variant="danger"
            now={
              list.filter((item) => !item.complete).length * list.length * 100
            }
            key={2}
            label={`To Do: ${list.filter((item) => !item.complete).length}`}
          />
        </ProgressBar>
      </Card.Body>
    </Card>
  );
}
