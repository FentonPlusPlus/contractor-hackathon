import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function CandidateRow({person}) {
  const [lgShow, setLgShow] = useState(false);
  
  return (
    <tr key={person.id}>
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.phone}</td>
       <td> <Button onClick={() => setLgShow(true)}>More info</Button></td>
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
                <p>Skills: {person.skills.map((skill) => 
                { return <span> {skill} |</span>})}</p>
            </Modal.Body>
        </Modal>
        </tr>
  )
}

export default CandidateRow;
