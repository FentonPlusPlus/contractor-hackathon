import candidates from '../lib/sample-data/candidates.json';


import React, { useState } from 'react';

export default function Candidates({ onSubmit }) {
  const [candidate, setCandidate] = useState({name: '', email: '', phone: '', skills:[]});

  const handleCandidateChange = (event, index, field) => {
    const newCandidates = [...candidates];
    newCandidates[index][field] = event.target.value;
    setCandidates(newCandidates);
  };

  const handleAddCandidate = (event) => {
    event.preventDefault();
    setCandidate([...candidates, { name: '', email: '', phone: '', skills:[] }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(candidates);
  };


  return (
    <form onSubmit={handleSubmit}>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <label htmlFor={`name-${index}`}>Name:</label>
          <input
            id={`name-${index}`}
            type="text"
            value={candidate.name}
            onChange={(event) => handleCandidateChange(event, index, 'name')}
            required
          />

          <label htmlFor={`contact-${index}`}>Contact:</label>
          <input
            id={`contact-${index}`}
            type="text"
            value={candidate.contact}
            onChange={(event) => handleCandidateChange(event, index, 'contact')}
            required
          />

          <label htmlFor={`skills-${index}`}>Skills:</label>
          <input
            id={`skills-${index}`}
            type="text"
            value={Object.keys(candidate.skills).join(', ')}
            onChange={(event) => {
              const newCandidates = [...candidates];
              const newSkills = event.target.value.split(',').map(skill => skill.trim());
              newCandidates[index].skills = newSkills.reduce((acc, skill) => {
                acc[skill] = true;
                return acc;
              }, {});
              setCandidates(newCandidates);
            }}
            required
          />
        </div>
      ))}

      <button onClick={handleAddCandidate}>Add Candidate</button>

      <button type="submit">Submit</button>
    </form>
  );
}
