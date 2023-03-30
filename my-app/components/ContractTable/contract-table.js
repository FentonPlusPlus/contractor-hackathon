import ContractRow from '../ContractRow/contract-row'

const ContractTable = ({ contracts, candidates }) => {
  
  return (
      <table>
        
       
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Contact</th>
          </tr>
        
        
       
          {contracts.map((job) => (
            <ContractRow job={job} key={job.id} candidates={candidates}/>
          ))}
    
      </table>
    );
  };
  
  export default ContractTable;