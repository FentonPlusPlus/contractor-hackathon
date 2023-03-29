import ContractRow from '../ContractRow/contract-row'

const ContractTable = ({ contracts, candidates }) => {
  
  return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((job) => (
            <ContractRow job={job} key={job.id} candidates={candidates}/>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ContractTable;