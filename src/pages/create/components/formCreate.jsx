import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormCreate() {

  let handleFormInputChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="container mt-4" style={{width: 100 + 'rem'}}>
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Nova VM</h4>
        </div>
        <div className="card-body">
          <Form className="row g-3">
            <div className="col-md-6">
              <Form.Group controlId="formCluster">
                <Form.Label className="rm-label fw-bold" column={'lg'}>Cluster</Form.Label>
                <Form.Select className="rm-select" onChange={(e) => handleFormInputChange(e)}>
                  <option disabled={true} value="">Choose a Cluster...</option>
                  <option value="cluster1">Cluster 1</option>
                  <option value="cluster2">Cluster 2</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group controlId="formTemplate">
                <Form.Label className="form-label fw-bold" column={'lg'}>Template</Form.Label>
                <Form.Select className="form-select" type="text" placeholder="Enter Template" required={true}>
                  <option disabled={true} value="">Choose a Template...</option>
                  <option value="template1">Template 1</option>
                  <option value="template2">Template 2</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group controlId="formName">
                <Form.Label className="form-label fw-bold" column={'lg'}>Name</Form.Label>
                <Form.Control className="form-control" type="text" placeholder="Enter Name" required={true}/>
              </Form.Group>
            </div>

            <div className="col-md-3">
              <Form.Group controlId="formMemory">
                <Form.Label className="form-label fw-bold" column={'lg'}>Memory</Form.Label>
                <Form.Control className="form-control" type="number" placeholder="Enter Memory Size" required={true}/>
              </Form.Group>
            </div>

            <div className="col-md-3">
              <Form.Group controlId="formCPU">
                <Form.Label className="form-label fw-bold" column={'lg'}>CPU</Form.Label>
                <Form.Control className="form-control" type="number" placeholder="Enter CPU Count" required={true}/>
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group controlId="formNic">
                <Form.Label className="form-label fw-bold" column={'lg'}>Nic (rede)</Form.Label>
                <Form.Select className="form-select" onChange={(e) => handleFormInputChange(e)}>
                  <option disabled={true} value="">Choose a Nic...</option>
                  <option value="nic1">Nic 1</option>
                  <option value="nic2">Nic 2</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group controlId="formComment">
                <Form.Label className="form-label fw-bold" column={'lg'}>Comentário</Form.Label>
                <Form.Control className="form-control" type="text" placeholder="Enter Comment"/>
              </Form.Group>
            </div>

            <div className="col-12">
              <Form.Group controlId="formDescription">
                <Form.Label className="form-label fw-bold" column={'lg'}>Descrição</Form.Label>
                <Form.Control className="form-control" type="text" placeholder="Enter Description"/>
              </Form.Group>
            </div>

            <div className="col-12 mt-4">
              <Button variant="primary" type="submit" className="btn btn-primary">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}