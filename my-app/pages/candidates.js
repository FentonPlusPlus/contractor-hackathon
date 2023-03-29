import candidates from '../lib/sample-data/candidates.json';
import Navbar from '../components/Navbar/navbar';
import CandidateTable from '../components/CandidateTable/candidate-table';

function Candidates() {
  return (
    <div>
        <Navbar></Navbar>
        <CandidateTable candidates={candidates}></CandidateTable>
    </div>
  )
}

export default Candidates
