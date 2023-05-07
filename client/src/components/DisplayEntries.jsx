import Entry from './Entry';
import { Button, Form, Container, Modal } from 'react-bootstrap';

const DisplayEntries = () => {
  return (
    <div>
      <Container>
        <Button onClick={() => setAddNewEntry(true)}>
          Track today's calories
        </Button>
      </Container>
      <Container>
        {entries != null &&
          entries.map((entry, i) => (
            <Entry
              entryData={entry}
              deleteSingleEntry={deleteSingleEntry}
              setChangeIngredient={setChangeIngredient}
              setChangeEntry={setChangeEntry}
            />
          ))}
      </Container>

      <Modal show={addNewEntry} onHide={() => setAddNewEntry(false)} centred>
        <Modal.Header closeButton>
          <Modal.Title>Add Calorie Entry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Label>dish</Form.Label>
            <Form.Control
              onChange={(event) => {
                newEntry.dish = event.target.value;
              }}
            ></Form.Control>
            <Form.Label>ingredients</Form.Label>
            <Form.Control
              onChange={(event) => {
                newEntry.ingredients = event.target.value;
              }}
            ></Form.Control>
            <Form.Label>calories</Form.Label>
            <Form.Control
              onChange={(event) => {
                newEntry.calories = event.target.value;
              }}
            ></Form.Control>
            <Form.Label>fat</Form.Label>
            <Form.Control
              type='number'
              onChange={(event) => {
                newEntry.fat = event.target.value;
              }}
            ></Form.Control>
          </Form.Group>
          <Button onClick={() => addSingleEntry()}>Add</Button>
          <Button onClick={() => setAddNewEntry(false)}>Cancel</Button>
        </Modal.Body>
      </Modal>

      <Modal
        show={changeIngredient.change}
        onHide={() => setChangeIngredient({ change: false, id: 0 })}
        centred
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Ingredients</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Label>new ingredients</Form.Label>
            <Form.Control
              onChange={(event) => {
                setNewIngredientName(event.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Button onClick={() => changeIngredientForEntry()}>Change</Button>
          <Button onClick={() => setChangeIngredient({ change: false, id: 0 })}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal>

      <Modal
        show={changeEntry.change}
        onHide={() => setChangeEntry({ change: false, id: 0 })}
        centred
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>dish</Form.Label>
            <Form.Control
              onChange={(event) => {
                newEntry.dish = event.target.value;
              }}
            ></Form.Control>
            <Form.Label>ingredients</Form.Label>
            <Form.Control
              onChange={(event) => {
                newEntry.ingredients = event.target.value;
              }}
            ></Form.Control>
            <Form.Label>calorie</Form.Label>
            <Form.Control
              onChange={(event) => {
                newEntry.calories = event.target.value;
              }}
            ></Form.Control>
            <Form.Label>fat</Form.Label>
            <Form.Control
              type='number'
              onChange={(event) => {
                newEntry.fat = event.target.value;
              }}
            ></Form.Control>
          </Form.Group>
          <Button onClick={() => changeSingleEntry()}>Change</Button>
          <Button onClick={() => setChangeEntry({ change: false, id: 0 })}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayEntries;
