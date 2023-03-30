import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import CandidateTable from '../CandidateTable/candidate-table';

function ConractRow({job, candidates}) {
    const [lgShow, setLgShow] = useState(false);
    const [sortedCandidates, setSortedCandidates] = useState(candidates);
    const [resetCandidates, setResetCandidates] = useState(candidates);

    const sortByMatchingSkills = () => {
        const sorted = [...candidates].sort((a, b) => {
          const aMatchingSkills = a.skills.filter(skill => job.skillsRequired.includes(skill));
          const bMatchingSkills = b.skills.filter(skill => job.skillsRequired.includes(skill));
    
          return bMatchingSkills.length - aMatchingSkills.length;
        });
    
        setSortedCandidates(sorted);
      };

    return (
    <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.company}</td>
              <td>{job.jobTitle}</td>
              <td>{job.startDate}</td>
              <td>{job.endDate}</td>
              <td>{job.contact}</td>
              <td><Button onClick={() => setLgShow(true)}>More info</Button></td>
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
                    <p>Contract employment from: {job.startDate} - {job.endDate}</p>
                    <h4>Job Description</h4>
                    <p>
                        {job.jobDescription}
                    </p>
                    <p>Skills Required: {job.skillsRequired.map((skill) => {
                        return <span> {skill} |</span>
                    })}</p>
                    <h5>Sort by</h5>
                    <button onClick={sortByMatchingSkills}>Most Recommended</button>
                    <button onClick={() => setSortedCandidates(resetCandidates)}>Reset</button>
                    <CandidateTable candidates={sortedCandidates}></CandidateTable>
                    </Modal.Body>
              </Modal>
            </tr>
  )
}

export default ConractRow;
