import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormCreate() {

  let handleFormInputChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formVmName">
        <Form.Label>VM Name</Form.Label>
        <Form.Control type="name" placeholder="Enter VM Name" required={true} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formVmOS">
        <Form.Label>Operational System</Form.Label>
        <Form.Select value={1} onChange={(e) => handleFormInputChange(e)}>
          <option disabled={true} value={1}>Choose an OS...</option>
          <option value="windows">Windows</option>
          <option value="linux">Linux</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVmHddSize">
        <Form.Label>HDD Size</Form.Label>
        <Form.Control type="number" aria-placeholder="Tamanho do HDD"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}