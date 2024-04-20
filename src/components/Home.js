import "../styles.css";
import { useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";

export default function HomePage() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Row>
      
        <Col xs={3}>
          <QueueCard />
        </Col>
        <Col xs={9}>
          <QueueCard />
        </Col>
      </Row>
    </div>
  );
}
function QueueCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Text> Max </Card.Text>
      </Card.Body>
    </Card>
  );
}
// Max Chaimankong was here, yuyang che was here
