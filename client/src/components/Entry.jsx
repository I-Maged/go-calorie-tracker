import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Entry = () => {
  return (
    <Card>
      <Row>
        <Col>Dish:{entryData !== undefined && entryData.dish}</Col>
        <Col>
          Ingredients:{entryData !== undefined && entryData.ingredients}
        </Col>
        <Col>Calories:{entryData !== undefined && entryData.calories}</Col>
        <Col>Fat:{entryData !== undefined && entryData.fat}</Col>
      </Row>
    </Card>
  );
};

export default Entry;
