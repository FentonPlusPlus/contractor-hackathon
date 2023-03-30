import CandidateRow from '../CandidateRow/candidate-row';

function CandidateTable({ candidates }) {

   return (
    <div>
    {candidates ? 
        <table>
         
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
        
        
            {candidates.map((person) => (
              <CandidateRow person={person} key={person.id}/>
            ))}
        
        </table> : <p>Not found</p>}
      </div>
      );
}

export default CandidateTable
