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
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <button>More info</button>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default CandidateTable
