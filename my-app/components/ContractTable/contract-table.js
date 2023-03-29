const ContractTable = ({ contracts }) => {
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
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.company}</td>
              <td>{job.jobTitle}</td>
              <td>{job.startDate}</td>
              <td>{job.endDate}</td>
              <td>{job.contact}</td>
              <button>More info</button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ContractTable;