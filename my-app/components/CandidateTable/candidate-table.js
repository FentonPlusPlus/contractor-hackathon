import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function CandidateTable({ candidates }) {
    const [lgShow, setLgShow] = useState(false);

    return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <Button onClick={() => setLgShow(true)}>More info</Button>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>
                      {person.name}
                    </h2>
                    <p>Email: {person.email}</p>
                    <p>Phone: {person.phone}</p>
                </Modal.Body>
              </Modal>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default CandidateTable
