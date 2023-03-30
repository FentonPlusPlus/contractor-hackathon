import CandidateRow from '../CandidateRow/candidate-row';

function CandidateTable({ candidates }) {

   return (
    <div>
    <h1 style={{marginLeft: '5rem'}}>Candidate Board</h1>
    {candidates ? 
        <table style={{marginLeft: '5rem', marginTop: '3rem'}}>
         
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
