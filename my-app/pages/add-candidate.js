import candidates from '../lib/sample-data/candidates.json';
import React, { useState } from 'react';
import Navbar from '../components/Navbar/navbar'

export default function AddCandidate({ onSubmit }) {
  const [candidate, setCandidate] = useState(
    {name: '', email: '', phone: '', skills:[]});
  

     function handleNameChange(e) {
        let nameString = e.target.value
        setCandidate({...candidate, name: nameString})
     }

     function handleEmailChange(e) {
        setCandidate({...candidate, email: e.target.value})
     }

     function handlePhoneChange(e) {
        setCandidate({...candidate, phone: e.target.value})
     }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(candidates);
  };

  return (
    <>
    <Navbar></Navbar>
    <form onSubmit={handleSubmit}>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type="text"
            value={candidate.name}
            onChange={(event) => handleNameChange(event)}
            required
          />
          <label htmlFor='email'>Emal:</label>
          <input
            id='email'
            type="text"
            value={candidate.email}
            onChange={(event) => handlEmailChange(event)}
            required
          />
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type="text"
            value={candidate.phone}
            onChange={(event) => handlePhoneChange(event)}
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
    </>
  );
}