import CandidateRow from '../CandidateRow/candidate-row';

function CandidateTable({ candidates }) {

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
              <CandidateRow person={person} key={person.id}/>
            ))}
          </tbody>
        </table>
      );
}

export default CandidateTable
