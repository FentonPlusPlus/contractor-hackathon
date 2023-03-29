import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import CandidateTable from '../CandidateTable/candidate-table';

function ConractRow({job, candidates}) {
    const [lgShow, setLgShow] = useState(false);

    return (
    <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.company}</td>
              <td>{job.jobTitle}</td>
              <td>{job.startDate}</td>
              <td>{job.endDate}</td>
              <td>{job.contact}</td>
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
                    <h2>{job.jobTitle}</h2>
                    <h3>{job.company}</h3>
                    <p>From: {job.startDate} - {job.endDate}</p>
                    <p>
                        {job.jobDescription}
                    </p>
                    <CandidateTable candidates={candidates}></CandidateTable>
                    </Modal.Body>
              </Modal>
            </tr>
  )
}

export default ConractRow;
